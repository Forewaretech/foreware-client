import PageBanner from "@/app/components/Banners/PageBanner";
import HeaderContent from "@/app/components/Headers/HeaderContent";
import Heading from "@/app/components/Headers/Headings";
import TileContent from "@/app/components/Headers/TileContent";
import ListDisc from "@/app/components/List/ListDisc";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import WebHRSuitedFor from "./WebHRSuitedFor";

import webhr_banner from "@/public/images/banners/webhr_banner.webp";
import webhr_overview from "@/public/images/partners/webhr_overview.webp";

const WebHRPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: webhr_banner,
          alt: "Foreware Technologies - WebHR partner Nigeria",
        }}
        heading={"Foreware - WebHR Partner in Nigeria"}
        text={
          "We leverage WebHR to help businesses manage employee records, payroll, leave, performance, and HR processes from one centralized platform."
        }
      />

      <section className="container">
        <SectionSpacing />
        <HeaderContent
          highlightText="Overview"
          heading="Our WebHR Partnership"
          center
        />
        <SectionSpacing />
        <TileContent
          direction="ltr"
          imageClassName="lg:max-h-[300px] xl:max-w-[500px]"
          image={{
            src: webhr_overview,
            alt: "Foreware Technologies - WebHR implementation and HR management services",
          }}
          content={
            <div>
              <p>
                Foreware is a WebHR partner in Nigeria, working with
                organizations to deploy and use WebHR as their core HR
                management platform. Through this partnership, we support
                businesses in aligning WebHR with their internal HR processes
                and workforce policies.
              </p>
              <BaseSpacing />
              <Heading variant="h4">Our WebHR partnership supports: </Heading>
              <BaseSpacing />
              <ListDisc
                items={[
                  "Employee records and HR administration",
                  "Leave and attendance management",
                  "Performance management",
                  "Payroll inputs and reporting",
                  "HR compliance and documentation",
                ]}
              />
            </div>
          }
        />
      </section>
      <SectionSpacing />
      <section>
        <WebHRSuitedFor />
      </section>
      <section className="container">
        <SectionSpacing />
        <HeaderContent
          href="/contact"
          buttonText="Request a Consultation"
          heading="Let's Talk About WebHR"
          center
        >
          If you're considering WebHR or looking to improve how you manage HR
          operations, we're ready to discuss how WebHR can support your
          workforce.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default WebHRPage;
