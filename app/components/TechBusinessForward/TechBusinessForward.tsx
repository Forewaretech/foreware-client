import HeaderContent from "../Headers/HeaderContent";
import OurServices from "../Services/OurServices";
import SectionSpacing from "../Spacing/SectionSpacing";

const TechBusinessForward = () => {
  return (
    <section className="container">
      <section>
        <HeaderContent
          center
          highlightText="Our Focus"
          heading="Technology That Moves Business Forward."
        >
          Every business is different. We take the time to understand yours,
          then deliver technology that fits and grows with you.
        </HeaderContent>
        <SectionSpacing />
        <OurServices />
      </section>
    </section>
  );
};

export default TechBusinessForward;
