import Banner from "@/components/frontend/home/Banner";
import PortfolioSection from "@/components/frontend/home/PortfolioSection";
import TopServices from "@/components/frontend/home/TopServices";
import WorkProcessSection from "@/components/frontend/home/WorkProcessSection";



export default function Header() {

  return (
    <>
      <Banner />
      <TopServices />
      <PortfolioSection/>
      <WorkProcessSection/>
    </>
  );
}
