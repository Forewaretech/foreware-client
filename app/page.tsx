import HomeBanner from "./components/Banners/HomeBanner";
import Partners from "./components/Partners/Partners";
import SectionSpacing from "./components/Spacing/SectionSpacing";
import TechBusinessForward from "./components/TechBusinessForward/TechBusinessForward";
import { TestimonialSection } from "./components/Testimonial/TestimonialSection";
import TestimonialsPreview from "./components/Testimonial/TestimonialsPreview";
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
      <SectionSpacing />
      <Partners />
      <SectionSpacing />
      <TestimonialsPreview />
    </main>
  );
}
