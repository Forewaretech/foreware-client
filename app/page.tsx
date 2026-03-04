import HomeBanner from "./components/Banners/HomeBanner";
import BlogsPreview from "./components/Blogs/BlogsPreview";
import PopUpForm from "./components/Form/PopUpForm";
import PopUpFormClient from "./components/Form/PopUpFormClient";
import Partners from "./components/Partners/Partners";
import SectionSpacing from "./components/Spacing/SectionSpacing";
import TechBusinessForward from "./components/TechBusinessForward/TechBusinessForward";
import TestimonialsPreview from "./components/Testimonial/TestimonialsPreview";
import DigitalTransformers from "./components/Transformers/DigitalTransformers";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <SectionSpacing />
      <TechBusinessForward />
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
