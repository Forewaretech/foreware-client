import PageBanner from "@/app/components/Banners/PageBanner";
import HeaderContent from "@/app/components/Headers/HeaderContent";
import Heading from "@/app/components/Headers/Headings";
import TileContent from "@/app/components/Headers/TileContent";
import ListDisc from "@/app/components/List/ListDisc";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";

import risk_cognizance_banner from "@/public/images/banners/risk_cognizance_banner.webp";
import risk_cognizance_overview from "@/public/images/partners/risk_cognizance_overview.webp";
import risk_cognizance_suited_for from "@/public/images/partners/risk_cognizance_suited_for.webp";

const RiskCognizancePage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: risk_cognizance_banner,
          alt: "risk cognozance banner",
        }}
        heading={"Foreware - Risk Cognizance Partner in Nigeria"}
        text={
          "We help organizations use Risk Cognizance to manage governance, risk, and compliance in a structured and consistent way."
        }
        buttonText="Request a Consultation"
      />

      <section className="container">
        <SectionSpacing />
        <HeaderContent
          highlightText="Overview"
          heading="Our Risk Cognizance Partnership"
          center
        />
        <SectionSpacing />
        <TileContent
          direction="ltr"
          imageClassName="lg:max-h-[300px] xl:max-w-[500px]"
          image={risk_cognizance_overview}
          content={
            <div>
              <p>
                Foreware is a Risk Cognizance partner in Nigeria, supporting
                organizations in adopting and using the platform as part of
                their GRC framework. Through this partnership, we help
                businesses align risk and compliance processes with operational
                realities and regulatory expectations.
              </p>
              <BaseSpacing />
              <Heading variant="h4">
                Our Risk Cognizance partnership supports:
              </Heading>
              <BaseSpacing />
              <ListDisc
                items={[
                  "Risk identification and assessment",
                  "Compliance management and tracking",
                  "Policy and control management",
                  "Audit readiness and reporting",
                  "Governance and oversight processes",
                ]}
              />
            </div>
          }
        />
      </section>
      <SectionSpacing />
      <section className=" bg-[#F2F2F2] py-20 ">
        <section className="container">
          <TileContent
            imageClassName="-"
            heading="Why Work with Foreware as Your Risk Cognizance Partner"
            content={
              <div className=" text-base">
                <p>
                  As a Risk Cognizance partner, our focus is on practical
                  adoption and long-term use. We work closely with teams to
                  ensure the platform supports real governance and compliance
                  workflows.
                </p>
                <Heading variant="h4">What our partnership offers: </Heading>
                <BaseSpacing />
                <ListDisc
                  items={[
                    "Clear and structured GRC processes",
                    "Improved visibility into risk and compliance",
                    "Better audit and reporting readiness",
                    "Local support from a trusted Risk Cognizance partner in Nigeria",
                  ]}
                />
              </div>
            }
            image={risk_cognizance_suited_for}
          />
        </section>
      </section>
      <section className="container">
        <SectionSpacing />
        <HeaderContent
          href="/contact"
          buttonText="Talk to a Risk Cognizance Partner"
          heading="Let's Talk About Risk Cognizance"
          center
        >
          If you're looking to strengthen risk and compliance management, we’re
          ready to discuss how Risk Cognizance can support your organization.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default RiskCognizancePage;
