import PageBanner from "@/app/components/Banners/PageBanner";
import HeaderContent from "@/app/components/Headers/HeaderContent";
import Heading from "@/app/components/Headers/Headings";
import TileContent from "@/app/components/Headers/TileContent";
import ListDisc from "@/app/components/List/ListDisc";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";

import xero_banner from "@/public/images/banners/xero_banner.webp";
import xero_overview from "@/public/images/partners/xero_overview.webp";
import xero_suited_for from "@/public/images/partners/xero_suited_for.webp";

const XeroPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: xero_banner,
          alt: "Foreware Technologies - Xero accounting partner Nigeria",
        }}
        heading={"Foreware - Xero Partner in Nigeria"}
        text={
          "We help businesses use Xero to manage accounting, invoicing, expenses, and financial reporting from one secure, cloud-based platform."
        }
        buttonText="Talk to a Xero Partner"
      />

      <section className="container">
        <SectionSpacing />
        <HeaderContent
          highlightText="Overview"
          heading="Our Xero Partnership"
          center
        />
        <SectionSpacing />
        <TileContent
          imageClassName=" lg:max-h-[300px] xl:max-w-[500px]"
          image={{
            src: xero_overview,
            alt: "Foreware Technologies - Xero implementation and bookkeeping services",
          }}
          content={
            <div>
              <p>
                Foreware is a Xero partner in Nigeria, supporting businesses in
                adopting and using Xero as their primary accounting system.
                Through this partnership, we help organizations align Xero with
                their financial processes and day-to-day accounting needs.
              </p>
              <BaseSpacing />
              <Heading variant="h4">Our Xero partnership supports: </Heading>
              <BaseSpacing />
              <ListDisc
                items={[
                  "Core accounting and bookkeeping",
                  "Invoicing and billing",
                  "Bank reconciliation",
                  "Expense tracking",
                  "Financial reporting and visibility",
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
            direction="ltr"
            imageClassName="lg:max-h-[200px]"
            content={
              <div className=" text-base">
                <Heading variant="h4">Who Xero Is Best Suited For: </Heading>
                <BaseSpacing />
                <ListDisc
                  items={[
                    "Small and growing businesses",
                    "Finance and accounting teams",
                    "Organizations seeking cloud-based accounting",
                    "Companies looking for a reliable Xero partner in Nigeria",
                  ]}
                />
              </div>
            }
            image={{
              src: xero_suited_for,
              alt: "Foreware Technologies - Xero cloud accounting solutions for businesses Nigeria",
            }}
          />
        </section>
      </section>
      <section className="container">
        <SectionSpacing />
        <HeaderContent
          href="/contact"
          buttonText="Talk to Us"
          heading="Let's Talk About Xero"
          center
        >
          If you're considering Xero or looking to improve how you manage your
          accounting and finances, we're ready to discuss how Xero can support
          your business.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default XeroPage;
