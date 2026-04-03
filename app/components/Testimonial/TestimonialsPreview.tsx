import HeaderContent from "../Headers/HeaderContent";
import Testimonials from "../testimonials/Testimonials";

const TestimonialsPreview = () => {
  return (
    <section id="success-stories" className="py-20 bg-[#F2F2F2]">
      <header className="container">
        <HeaderContent
          heading="Proven Results Across Industries."
          highlightText="Our Success Stories"
          center
        >
          Our team brings deep expertise across multiple industries, which means
          whatever sector your business operates in, we understand the
          challenges you face. See what our clients are saying about working
          with us.
        </HeaderContent>
      </header>

      <section>
        <Testimonials />
      </section>
    </section>
  );
};

export default TestimonialsPreview;
