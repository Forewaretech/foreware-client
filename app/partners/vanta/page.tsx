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
          alt: "Foreware Technologies - Vanta partner Nigeria",
        }}
        heading={"Foreware - Vanta GRC Partner in Nigeria"}
        text={
          "Foreware is a trusted Vanta GRC partner in Nigeria, helping businesses implement a governance, risk, and compliance program that is structured, scalable, and built to last."
        }
        buttonText="Request a Consultation"
      />

      <section className="container">
        <SectionSpacing />
        <HeaderContent
          highlightText="Overview"
          heading="Backed by Vanta. Delivered by Foreware."
          center
        />
        <SectionSpacing />
        <TileContent
          direction="ltr"
          imageClassName="lg:max-h-[300px] xl:max-w-[500px]"
          image={{
            src: risk_cognizance_overview,
            alt: "Foreware Technologies - Vanta implementation and compliance services",
          }}
          content={
            <div>
              <p>
                Vanta is one of the world's leading GRC platforms, trusted by
                thousands of businesses globally. As an authorised Vanta
                partner, Foreware brings that power directly to your
                organisation, with the local expertise to implement it right and
                the ongoing support to keep it running.
              </p>
              <BaseSpacing />
              <Heading variant="h4">Our Vanta partnership supports:</Heading>
              <BaseSpacing />
              <ListDisc
                items={[
                  "A clear, structured approach to managing risk and compliance",
                  "Automated control monitoring across multiple frameworks",
                  "Full audit readiness",
                  "Real-time visibility into your governance program",
                  "A local team that understands your business and regulatory environment",
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
            heading="Why Work with Foreware as Your Vanta Partner"
            content={
              <div className="text-base'">
                <p>
                  As a Vanta partner, our focus is on practical adoption and
                  long-term use. We work closely with teams to ensure the
                  platform supports real governance and compliance workflows.
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
            image={{
              src: risk_cognizance_suited_for,
              alt: "Foreware Technologies - governance, risk, and compliance solutions Nigeria",
            }}
          />
        </section>
      </section>
      <section className="container">
        <SectionSpacing />
        <HeaderContent
          href="/contact"
          buttonText="Get Started Today"
          heading="Your Business Deserves a Smarter Way to Manage Risk."
          center
        >
          Stop managing risk manually. With Vanta and Foreware, you get a
          smarter, faster, and more reliable way to run your GRC program.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default RiskCognizancePage;
