import PageLoader from "@/components/shared/PageLoader";
import EmployeeSelfService from "@/components/homepage/EmployeeSelfService";
import Faq from "@/components/homepage/Faq";
import HeroSection from "@/components/homepage/HeroSection";
import OurModules from "@/components/homepage/OurModules";
import PlatformBenefits from "@/components/homepage/PlatformBenefits";
import Pricing from "@/components/homepage/Pricing";
import Testimonials from "@/components/homepage/Testimonials";
import RecentBlogs from "@/components/homepage/RecentBlogs";
import { getPageData } from "@/data/loader";

export default async function Home() {
  const response = await getPageData("pricing");
  const pricingData = response?.data?.[0]?.blocks?.find(
    (block: any) => block.__component === "pricing-page.pricing-card",
  );

  return (
    <div className="">
      <PageLoader />
      <HeroSection />
      <OurModules />
      <EmployeeSelfService />
      <Testimonials />
      <PlatformBenefits />
      <Pricing pricingData={pricingData?.cards || []} />
      <Faq />
      <RecentBlogs />
      {/* hello world */}
    </div>
  );
}
