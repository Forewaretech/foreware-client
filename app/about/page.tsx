import PageBanner from "../components/Banners/PageBanner";
import aboutBanner from "@/public/images/banners/about_banner.png";
import DigitalTransformers from "../components/Transformers/DigitalTransformers";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import HeaderContent from "../components/Headers/HeaderContent";
import Link from "next/link";
import OurStory from "./OurStory";
import OurPurpose from "./OurPurpose";
import OurPeople from "./OurPeople";

const AboutPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{ image: aboutBanner, alt: "about banner" }}
        heading="Engineering modern business for sustained performance."
        text="We apply proven expertise to help organisations manage complexity, respond faster to change, and operate with confidence."
      />
      <SectionSpacing />
      <OurStory />
      <SectionSpacing />
      <OurPurpose />
      <SectionSpacing />
      <OurPeople />
      <SectionSpacing />
      <HeaderContent heading="Join Us in Building What's Next" center>
        Whether you're looking to streamline operations, innovate with data,
        secure your systems, or transform your entire digital landscape, we're
        here to help you navigate the future with clarity and confidence.
        <Link href="" className=" text-primary font-semibold my-4 block">
          Let's architect tomorrow, together.
        </Link>
      </HeaderContent>
      <SectionSpacing />
      <DigitalTransformers />
      <SectionSpacing />
    </main>
  );
};

export default AboutPage;
