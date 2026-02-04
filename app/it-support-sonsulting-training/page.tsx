import PageBanner from "../components/Banners/PageBanner";

import it_support from "@/public/images/banners/it_support.png";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import TileContent from "../components/Headers/TileContent";

import overview from "@/public/images/it_support/overview.png";
import HeaderContent from "../components/Headers/HeaderContent";
import ITSupportSols from "./ITSupportSols";

const ITSupportConsultingTrainingPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: it_support,
          alt: "IT support and consulting banner",
        }}
        heading={"Reliable IT Support, Consulting & Training Services"}
        text={
          "Practical technology support that helps your business run smoothly and stay secure."
        }
        buttonText="Contact Us"
      />
      <SectionSpacing />
      <section className="container">
        <TileContent
          heading={"IT Support, Consulting & Training Services"}
          highlightText={"Overview"}
          imageClassName="-"
          content={[
            "Foreware delivers structured IT support and advisory services focused on system reliability, security, and operational continuity.",
          ]}
          image={overview}
        />
        <SectionSpacing />
        <ITSupportSols />
        <SectionSpacing />
        <HeaderContent
          buttonText="Contact Us"
          heading="Let's Support Your IT Environment"
          center
        >
          Whether you need ongoing support, strategic guidance, or help enabling
          your teams, we're here to help.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default ITSupportConsultingTrainingPage;
