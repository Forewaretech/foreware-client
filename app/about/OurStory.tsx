import Heading from "../components/Headers/Headings";

import about_1 from "@/public/images/about_1.png";
import TileContent from "../components/Headers/TileContent";

const OurStory = () => {
  return (
    <section className="container">
      <TileContent
        heading="Leading from the Front"
        highlightText="Our Story"
        image={{ src: about_1, alt: "Foreware Technologies - Our Story" }}
        content={
          <div>
            <p>
              Foreware is a technology solutions company focused on engineering
              enterprise systems that support sustained business performance. We
              work across software, data, integration, and enterprise platforms
              to help organisations operate with clarity and control.
            </p>
            <p className="my-4">
              Our approach is grounded in long-term partnership. We work closely
              with our clients to ensure technology decisions translate into
              reliable systems, stronger execution, and measurable outcomes over
              time.
            </p>
            <Heading variant="h4">Where it all began</Heading>
            <p className="my-4">
              Foreware was established in response to a recurring challenge. As
              organisations grew, technology environments became fragmented,
              difficult to scale, and increasingly disconnected from business
              priorities.
            </p>
            <p className="my-4">
              We set out to address this by designing technology as a foundation
              for operations, not a constraint. From the start, our focus has
              been on reducing complexity, strengthening system reliability, and
              supporting our partners' success as they grow.
            </p>
          </div>
        }
      />
    </section>
  );
};

export default OurStory;
