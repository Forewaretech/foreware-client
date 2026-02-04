import PageBanner from "../components/Banners/PageBanner";

import custom_soft_dev from "@/public/images/banners/customer_soft_dev.png";
import SectionSpacing from "../components/Spacing/SectionSpacing";

import overview_img from "@/public/images/custom_software_dev/overview_img.png";
import TileContent from "../components/Headers/TileContent";
import HeaderContent from "../components/Headers/HeaderContent";
import CusSoftSols from "./CusSoftSols";

const CustomSoftwareSolutiolnPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: custom_soft_dev,
          alt: "custom software development banner",
        }}
        heading={"Tailored Software Solutions That Match Your Exact Needs"}
        text={
          "Custom software designed to support your business operations and goals."
        }
        buttonText="Request a Consultation"
      />
      <SectionSpacing />
      <section className="container">
        <TileContent
          image={overview_img}
          heading={"Custom Software Development"}
          highlightText={"Overview"}
          imageClassName="-"
          content={
            <div>
              <p className="my-4">
                Custom software enables businesses to address specific
                operational needs with precision and control. At Foreware, we
                deliver tailored software solutions that align with business
                requirements as they evolve.
              </p>
            </div>
          }
        />
        <SectionSpacing />
        <CusSoftSols />
        <SectionSpacing />
        <HeaderContent
          buttonText="Request a Consultation"
          heading="Let's Talk About Your Software Needs"
          center
        >
          Whether you're building new software or improving existing systems, we
          help you take the next step with clarity and direction.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default CustomSoftwareSolutiolnPage;
