import PageBanner from "@/app/components/Banners/PageBanner";
import HeaderContent from "@/app/components/Headers/HeaderContent";
import Heading from "@/app/components/Headers/Headings";
import TileContent from "@/app/components/Headers/TileContent";
import ListDisc from "@/app/components/List/ListDisc";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";

import wondersoft_overview from "@/public/images/partners/wondersoft_overview.webp";
import wondersoft_suited_for from "@/public/images/partners/wondersoft_suited_for.webp";
import wondersoft_banner from "@/public/images/banners/wondersoft_banner.webp";

const WondersoftPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: wondersoft_banner,
          alt: "wondersoft banner",
        }}
        heading={"Foreware - Wondersoft Partner in Nigeria"}
        text={
          "We leverage Wondersoft technology to help retailers manage billing, inventory, reporting, and store operations from a single, reliable system."
        }
        buttonText="Talk to a Wondersoft Partner"
      />

      <section className="container">
        <SectionSpacing />
        <HeaderContent
          highlightText="Overview"
          heading="Our Wondersoft Partnership"
          center
        />
        <SectionSpacing />
        <TileContent
          direction="ltr"
          imageClassName=" lg:max-h-[300px] xl:max-w-[500px]"
          image={wondersoft_overview}
          content={
            <div>
              <p>
                Foreware is a Wondersoft partner in Nigeria, supporting
                retailers in deploying and using Wondersoft as their core retail
                and POS system. Through this partnership, we help businesses
                align the platform with their store operations and reporting
                needs.
              </p>
              <BaseSpacing />
              <Heading variant="h4">
                Our Wondersoft partnership supports:
              </Heading>
              <BaseSpacing />
              <ListDisc
                items={[
                  "Retail billing and POS operations",
                  "Inventory and stock management",
                  "Pricing and promotions",
                  "Store-level and head-office reporting",
                  "Multi-store visibility and control",
                  "Local support from a trusted Wondersoft partner in Nigeria",
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
              <Heading variant="h4">
                Who Wondersoft Is Best Suited For:{" "}
              </Heading>
              <BaseSpacing />
              <ListDisc
                items={[
                  "Retail businesses and store chains",
                  "Supermarkets and pharmacies",
                  "High-volume retail environments",
                  "Businesses seeking a reliable Wondersoft partner in Nigeria",
                ]}
              />
            </div>
          }
          image={wondersoft_suited_for}
        />
      </section>
      <section className="container">
        <SectionSpacing />
        <HeaderContent
          href="/contact"
          buttonText="Talk to a Wondersoft Partner"
          heading="Let's Talk About Wondersoft"
          center
        >
          If you're considering Wondersoft or looking to improve how you manage
          retail operations, we’re ready to discuss how the platform can support
          your business.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default WondersoftPage;
