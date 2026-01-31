import HomeBanner from "./components/Banners/HomeBanner";
import BlogsPreview from "./components/Blogs/BlogsPreview";
import Partners from "./components/Partners/Partners";
import SectionSpacing from "./components/Spacing/SectionSpacing";
import TechBusinessForward from "./components/TechBusinessForward/TechBusinessForward";
import TestimonialsPreview from "./components/Testimonial/TestimonialsPreview";
import DigitalTransformers from "./components/Transformers/DigitalTransformers";
import OurServices from "./components/Services/OurServices";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <SectionSpacing />
      <TechBusinessForward />
      <SectionSpacing />
      <OurServices />
      <SectionSpacing />
      <Partners />
      <SectionSpacing />
      <TestimonialsPreview />
      <WhyChooseUs />
      <SectionSpacing />
      <BlogsPreview />
      <DigitalTransformers />
      <SectionSpacing />
    </main>
  );
}
