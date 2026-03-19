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
          From startups to established enterprises across Nigeria and Africa,
          we've delivered solutions that drive measurable impact. See how we've
          helped businesses scale operations, unlock growth, and stay
          competitive.
        </HeaderContent>
      </header>

      <section>
        <Testimonials />
      </section>
    </section>
  );
};

export default TestimonialsPreview;
