# ==========================================
# 1. Base Image
# ==========================================
FROM node:18-alpine AS base

# ==========================================
# 2. Dependencies Stage
# ==========================================
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && npm install; \
  fi

# ==========================================
# 3. Builder Stage
# ==========================================
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# HARDCODED ENVIRONMENT VARIABLE
# Must be present during build so Next.js can embed it into the frontend code
ENV NEXT_PUBLIC_STRAPI_URL=https://human-systems-490110.uc.r.appspot.com/
ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else npm run build; \
  fi

# ==========================================
# 4. Production Runner Stage
# ==========================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Hardcode it in runtime too for server-side fetches
ENV NEXT_PUBLIC_STRAPI_URL=https://human-systems-490110.uc.r.appspot.com/
ENV NEXT_TELEMETRY_DISABLED=1

# Cloud Run expects the app to listen on PORT 8080 by default
ENV PORT=8080

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 8080

CMD ["npm", "start"]