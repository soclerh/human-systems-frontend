import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingFaq from "@/components/pricing/PricingFaq";
import SharedCta from "@/components/shared/SharedCta";
import { getPageData } from "@/data/loader";

export const metadata = {
  title: "Pricing — Socle RH | Human Systems",
  description:
    "Simple, transparent pricing for businesses of all sizes. Choose from Starter, Professional, or Enterprise plans with multi-tenant security and GDPR compliance.",
};

export default async function PricingPage() {
  const response = await getPageData("pricing");

  if (!response) {
    return <div>Loading...</div>;
  }

  const pricingData = response.data[0].blocks.find(
    (block: any) => block.__component === "pricing-page.pricing-card",
  );

  return (
    <main className="min-h-screen bg-white">
      <PricingHero />
      <PricingCards pricingData={pricingData?.cards || []} />
      <PricingComparison />
      <PricingFaq />
      <SharedCta />
    </main>
  );
}
