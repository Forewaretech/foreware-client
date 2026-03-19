import PageBanner from "@/app/components/Banners/PageBanner";
import HeaderContent from "@/app/components/Headers/HeaderContent";
import Heading from "@/app/components/Headers/Headings";
import TileContent from "@/app/components/Headers/TileContent";
import ListDisc from "@/app/components/List/ListDisc";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";

import zoho_banner from "@/public/images/banners/zoho_banner.webp";
import zoho_overview from "@/public/images/partners/zoho_overview.webp";
import zoho_suited_for from "@/public/images/partners/zoho_suited_for.webp";

const ZohoPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: zoho_banner,
          alt: "zoho banner",
        }}
        heading={"Foreware - Zoho Partner in Nigeria"}
        text={
          "We leverage Zoho technology to help businesses manage CRM, sales, customer engagement, and internal processes from one connected platform."
        }
        buttonText="Contact us"
      />

      <section className="container">
        <SectionSpacing />
        <HeaderContent
          highlightText="Overview"
          heading="Our Zoho Partnership"
          center
        />
        <SectionSpacing />
        <TileContent
          direction="ltr"
          imageClassName=" lg:max-h-[300px] xl:max-w-[500px]"
          image={zoho_overview}
          content={
            <div>
              <p>
                Foreware is a Zoho partner in Nigeria, working with
                organizations to deploy and use Zoho solutions as part of their
                core business operations. Through our partnership, we support
                businesses in configuring Zoho to align with how their teams
                work and how their customers engage.
              </p>
              <BaseSpacing />
              <Heading variant="h4">Our Zoho partnership covers: </Heading>
              <BaseSpacing />
              <ListDisc
                items={[
                  "Zoho CRM for sales and customer management",
                  "Lead and pipeline management",
                  "Customer engagement and communication",
                  "Reporting and business visibility",
                  "Integration with other business systems",
                ]}
              />
            </div>
          }
        />
      </section>
      <SectionSpacing />
      <section className=" bg-[#F2F2F2] py-20 container">
        <TileContent
          imageClassName="lg:max-h-[200px]"
          content={
            <div className=" text-base">
              <Heading variant="h4">Who Zoho Is Best Suited For: </Heading>
              <BaseSpacing />
              <ListDisc
                items={[
                  "Growing businesses and mid-sized organizations",
                  "Sales-driven teams",
                  "Companies looking to improve CRM and customer management",
                  "Organizations seeking a reliable Zoho partner in Nigeria",
                ]}
              />
            </div>
          }
          image={zoho_suited_for}
        />
      </section>
      <section className="container">
        <SectionSpacing />
        <HeaderContent
          href="/contact"
          buttonText="Contact Us"
          heading="Let's Talk About Zoho"
          center
        >
          If you're considering Zoho or looking to improve how you use Zoho CRM
          across your business, we're ready to discuss what works best for your
          needs.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default ZohoPage;
