import PageBanner from "../../components/Banners/PageBanner";

import odoo_banner from "@/public/images/banners/odoo_banner.webp";
import SectionSpacing from "../../components/Spacing/SectionSpacing";
import HeaderContent from "../../components/Headers/HeaderContent";
import TileContent from "../../components/Headers/TileContent";
import Heading from "../../components/Headers/Headings";

import BaseSpacing from "../../components/Spacing/BaseSpacing";

import odoo_overivew from "@/public/images/partners/odoo_overivew.png";
import SuitedFor from "./OdooSuitedFor";
import ListDisc from "@/app/components/List/ListDisc";

const PartnersPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: odoo_banner,
          alt: "odoo banner",
        }}
        heading={"Foreware - Odoo Partner in Nigeria"}
        text={
          "We leverage Odoo technology to help businesses manage finance, sales, inventory, and operations within a single, connected system."
        }
      />

      <section className="container">
        <SectionSpacing />
        <HeaderContent
          highlightText="Overview"
          heading="Our Odoo Partnership"
          center
        />
        <SectionSpacing />
        <TileContent
          direction="ltr"
          imageClassName="lg:max-h-[300px] xl:max-w-[500px]"
          image={odoo_overivew}
          content={
            <div>
              <p>
                As an Odoo partner, our focus is on helping businesses use the
                platform effectively, not just deploy it. We work closely with
                teams to ensure Odoo supports real workflows and continues to
                deliver value as the business evolves.
              </p>
              <BaseSpacing />
              <Heading variant="h4">
                What clients gain from our Odoo partnership:
              </Heading>
              <BaseSpacing />
              <ListDisc
                items={[
                  "A single system for ERP and CRM",
                  "Better visibility across departments",
                  "Reduced manual work and duplication",
                  "A scalable platform supported locally in Nigeria",
                ]}
              />
            </div>
          }
        />
        <SectionSpacing />
        <SuitedFor />
        <SectionSpacing />
        <HeaderContent
          href="/contact"
          buttonText="Contact Us"
          heading="Let's Talk About Odoo"
          center
        >
          If you're looking for an experienced Odoo partner to support ERP and
          CRM across your business, we're ready to discuss how Odoo can fit your
          operations.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default PartnersPage;
