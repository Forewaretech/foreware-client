import HomeBanner from "./components/Banners/HomeBanner";
import BlogsPreview from "./components/Blogs/BlogsPreview";
import Partners from "./components/Partners/Partners";
import SectionSpacing from "./components/Spacing/SectionSpacing";
import TechBusinessForward from "./components/TechBusinessForward/TechBusinessForward";
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
      <SectionSpacing />
      <BlogsPreview />
    </main>
  );
}
