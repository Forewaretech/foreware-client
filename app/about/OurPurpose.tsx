import HighlightButton from "../components/Buttons/HighlightButton";
import ContentSpacing from "../components/Spacing/ContentSpacing";

import vision from "@/public/icons/vision.svg";
import mission from "@/public/icons/mission.svg";
import Image from "next/image";

const purpose = [
  {
    icon: vision,
    title: "Our Vision",
    text: "To provide reliable technology and long-term support that helps our customers move forward.",
  },
  {
    icon: mission,
    title: "Our Mission",
    text: "To be the technology partner that businesses across Africa trust.",
  },
];
const OurPurpose = () => {
  return (
    <section className="container">
      <HighlightButton>Our Purpose</HighlightButton>
      <ContentSpacing />
      <section
        className=" flex flex-col gap-4
        lg:flex-row"
      >
        {purpose.map(({ icon, text, title }) => (
          <article
            key={title}
            className=" p-10 bg-foreware-3 rounded-lg text-white
            lg:w-1/2"
          >
            <Image src={icon} alt={title} />
            <h2 className=" text-xl font-semibold mt-6">{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default OurPurpose;
