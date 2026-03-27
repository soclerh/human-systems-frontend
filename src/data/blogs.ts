export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  // Updated to be a single object instead of an array
  content: {
    title: string;
    description: string;
  };
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  coverImage: string;
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    slug: "rise-of-ai-agents-2026",
    title: "The Rise of AI Agents in Enterprise Operations",
    excerpt:
      "Explore how autonomous AI agents are transforming business workflows, from customer support to supply chain optimization.",
    content: {
      title: "The Agent Revolution",
      description:
        "Autonomous AI agents are no longer science fiction — they are actively reshaping how enterprises operate. In 2026, companies are deploying intelligent agents that can reason, plan, and execute complex multi-step tasks with minimal human oversight.\n\nUnlike traditional automation that follows rigid rules, AI agents can adapt to novel situations by leveraging large language models and retrieval-augmented generation. They can parse unstructured data, make contextual decisions, and even collaborate with other agents to complete intricate workflows.\n\nFrom automating tier-1 customer support tickets to orchestrating multi-vendor supply chains, AI agents are proving their value across industries. Early adopters report up to 60% reduction in manual processing time and significant improvements in accuracy.\n\nThe key to successful agent deployment lies in proper guardrails. Organizations must define clear boundaries for agent autonomy, implement human-in-the-loop checkpoints for critical decisions, and continuously monitor agent behavior through comprehensive logging.\n\nThe future belongs to organizations that master the art of human-AI collaboration. Those who invest in agent infrastructure today will have a transformative competitive advantage tomorrow.",
    },
    date: "March 8, 2026",
    readTime: "5 min read",
    author: {
      name: "Sarah Jenkins",
      role: "Head of AI Research",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60",
    },
    category: "AI Trends",
    coverImage:
      "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    slug: "building-responsible-ai",
    title: "Building Responsible AI: Ethics, Bias, and Governance",
    excerpt:
      "Practical strategies for ensuring your AI systems are fair, transparent, and aligned with ethical standards.",
    content: {
      title: "The Responsibility Imperative",
      description:
        "As AI systems become more powerful and pervasive, the responsibility to build them ethically has never been greater. Organizations deploying AI must proactively address bias, ensure transparency, and establish robust governance frameworks.\n\nBias in AI doesn't just happen — it's inherited from training data and amplified by model architectures. Regular bias audits, diverse training datasets, and fairness metrics are essential tools for identifying and mitigating discriminatory patterns before they reach production.\n\nTransparency goes beyond explainability. Stakeholders need to understand not just what an AI system decided, but why and how. Model cards, decision logs, and interpretable AI techniques like SHAP values help build the trust necessary for widespread adoption.\n\nGovernance frameworks should define clear ownership, approval processes, and escalation paths for AI systems. This includes establishing AI ethics committees, conducting regular impact assessments, and maintaining comprehensive documentation of model lineage and training data provenance.\n\nResponsible AI is not a constraint — it's a competitive advantage. Organizations that prioritize ethical AI build deeper trust with customers, avoid regulatory penalties, and create more robust, reliable systems.",
    },
    date: "February 24, 2026",
    readTime: "4 min read",
    author: {
      name: "Marcus Chen",
      role: "AI Ethics Lead",
      avatar:
        "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&auto=format&fit=crop&q=60",
    },
    category: "AI Ethics",
    coverImage:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    slug: "mlops-best-practices",
    title: "MLOps in 2026: From Experimentation to Production at Scale",
    excerpt:
      "An essential guide to building reliable ML pipelines that take models from notebook to production seamlessly.",
    content: {
      title: "The MLOps Maturity Model",
      description:
        "The gap between a working ML notebook and a production-ready system remains one of the biggest challenges in AI. MLOps — the practice of operationalizing machine learning — has evolved rapidly to bridge this divide.\n\nModern MLOps platforms provide end-to-end lifecycle management: from data versioning and experiment tracking to automated retraining and canary deployments. The best teams treat ML models like software artifacts, with proper CI/CD pipelines, testing suites, and monitoring dashboards.\n\nData drift detection is no longer optional. Production models degrade silently as the world changes around them. Automated monitoring systems that detect distribution shifts in input features and model outputs are essential for maintaining prediction quality over time.\n\nFeature stores have emerged as a critical infrastructure component. By centralizing feature computation and serving, organizations eliminate redundant work, ensure consistency between training and inference, and dramatically accelerate the time from idea to deployed model.\n\nThe organizations winning at AI in 2026 aren't just building better models — they're building better systems for deploying, monitoring, and continuously improving those models at scale.",
    },
    date: "February 12, 2026",
    readTime: "6 min read",
    author: {
      name: "Elena Rodriguez",
      role: "VP of ML Engineering",
      avatar:
        "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=600&auto=format&fit=crop&q=60",
    },
    category: "MLOps",
    coverImage:
      "https://images.unsplash.com/photo-1772289767370-9caabfb3f5f0?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "4",
    slug: "ai-driven-decision-intelligence",
    title: "AI-Driven Decision Intelligence: Beyond Dashboards",
    excerpt:
      "How predictive and prescriptive analytics are replacing static reports and accelerating business outcomes.",
    content: {
      title: "Beyond the Dashboard",
      description:
        "Static dashboards showing last month's numbers are no longer enough. Today's fastest-moving organizations are embracing Decision Intelligence — a discipline that combines data science, decision theory, and AI to not just show what happened, but predict what will happen and recommend what to do about it.\n\nPredictive analytics has moved beyond simple trend extrapolation. Modern AI systems can identify non-obvious correlations across hundreds of variables, providing forecasts with confidence intervals that help leaders make risk-adjusted decisions.\n\nPrescriptive analytics takes this further by recommending specific actions. Instead of showing a chart of declining metrics, AI systems can suggest the three most impactful interventions, model their expected outcomes, and even execute approved actions autonomously.\n\nNatural language interfaces are making these capabilities accessible to everyone. Business users can ask complex analytical questions in plain English and receive instant, AI-generated insights complete with visualizations and recommended next steps.\n\nDecision Intelligence empowers organizations to move from hindsight to foresight. It creates a data-driven culture where every team member — not just analysts — can make smarter, faster decisions.",
    },
    date: "January 28, 2026",
    readTime: "5 min read",
    author: {
      name: "David Kim",
      role: "Chief Data Officer",
      avatar:
        "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=600&auto=format&fit=crop&q=60",
    },
    category: "Analytics",
    coverImage:
      "https://images.unsplash.com/photo-1761839257864-c6ccab7238de?w=600&auto=format&fit=crop&q=60",
  },
];

export function getAllBlogs(): BlogPost[] {
  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getRecentBlogs(limit: number = 3): BlogPost[] {
  return getAllBlogs().slice(0, limit);
}
