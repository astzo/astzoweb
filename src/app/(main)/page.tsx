import Banner from "@/components/frontend/home/Banner";
import PortfolioSection from "@/components/frontend/home/PortfolioSection";
import TestimonialsSection from "@/components/frontend/home/TestimonialsSection";
import TopServices from "@/components/frontend/home/TopServices";
import WhyChooseUsSection from "@/components/frontend/home/WhyChooseUsSection";
import WorkProcessSection from "@/components/frontend/home/WorkProcessSection";



export default function Header() {

  return (
    <>
      <Banner />
      <TopServices />
      <PortfolioSection/>
      <WorkProcessSection/>
      <WhyChooseUsSection/>
      <TestimonialsSection/>
    </>
  );
}
