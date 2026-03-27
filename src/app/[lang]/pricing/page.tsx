import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingFaq from "@/components/pricing/PricingFaq";
import SharedCta from "@/components/shared/SharedCta";
import { staticPricingData } from "@/data/staticPricing";

export const metadata = {
  title: "Pricing — NeuralOps",
  description:
    "Simple, transparent pricing for teams of all sizes. Choose from Starter, Professional, or Enterprise plans with multi-tenant security and SOC 2 compliance.",
};

export default async function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PricingHero />
      <PricingCards pricingData={staticPricingData} />
      <PricingComparison />
      <PricingFaq />
      <SharedCta />
    </main>
  );
}
