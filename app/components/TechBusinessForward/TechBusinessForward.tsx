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
          We deliver enterprise solutions designed for scale. Custom software,
          intelligent data systems, and seamless integrations that turn
          operational complexity into competitive advantage
        </HeaderContent>
        <SectionSpacing />
        <OurServices />
      </section>
    </section>
  );
};

export default TechBusinessForward;
