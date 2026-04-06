import PageBanner from "../components/Banners/PageBanner";

import system_int_soft_dev from "@/public/images/banners/system_int_soft_dev.png";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import HeaderContent from "../components/Headers/HeaderContent";
import TileContent from "../components/Headers/TileContent";

import sys_int_api from "@/public/images/syss_int_api_dev/sys_int_api.png";
import SysIntAPIDevs from "./SysIntAPIDevs";

const SystemIntegrationApiDevPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: system_int_soft_dev,
          alt: "Foreware Technologies - API and system connectivity solutions Nigeria",
        }}
        heading={
          "Systems Integration & API Development that Supports Smarter Operations"
        }
        text={
          "We connect systems, applications, and data so your business works as one."
        }
        buttonText="Learn More"
      />
      <SectionSpacing />
      <section className="container">
        <TileContent
          image={{
            src: sys_int_api,
            alt: "Foreware Technologies – systems integration solutions Nigeria",
          }}
          heading={"Systems Integration & API Development"}
          highlightText={"Overview"}
          imageClassName="
          lg:max-h-[350px]"
          content={
            <div>
              <p className="my-4">
                Modern businesses rely on multiple systems to operate. At
                Foreware, we help organizations connect these systems, reduce
                manual work, and ensure information flows seamlessly across
                platforms.
              </p>
            </div>
          }
        />
        <SectionSpacing />
        <SysIntAPIDevs />
        <SectionSpacing />
        <HeaderContent
          buttonText="Talk to us"
          heading="Let's Connect Your Systems"
          center
        >
          If you're looking to streamline operations and improve how your
          systems work together, we're ready to help.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default SystemIntegrationApiDevPage;
