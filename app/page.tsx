import HomeBanner from "./components/Banners/HomeBanner";
import SectionSpacing from "./components/Spacing/SectionSpacing";
import TechBusinessForward from "./components/TechBusinessForward/TechBusinessForward";
import OurServices from "./Services/OurServices";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <SectionSpacing />
      <TechBusinessForward />
      <SectionSpacing />
      <OurServices />
      <SectionSpacing />
    </main>
  );
}
