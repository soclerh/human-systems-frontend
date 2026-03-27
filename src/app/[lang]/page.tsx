import PageLoader from "@/components/shared/PageLoader";
import EmployeeSelfService from "@/components/homepage/EmployeeSelfService";
import Faq from "@/components/homepage/Faq";
import HeroSection from "@/components/homepage/HeroSection";
import OurModules from "@/components/homepage/OurModules";
import PlatformBenefits from "@/components/homepage/PlatformBenefits";
import Pricing from "@/components/homepage/Pricing";
import Testimonials from "@/components/homepage/Testimonials";
import RecentBlogs from "@/components/homepage/RecentBlogs";
import { staticPricingData } from "@/data/staticPricing";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <div className="">
      <PageLoader />
      <HeroSection />
      <OurModules />
      <EmployeeSelfService />
      <Testimonials />
      <PlatformBenefits />
      <Pricing pricingData={staticPricingData} />
      <Faq />
      <RecentBlogs />
      {/* hello world */}
    </div>
  );
}
