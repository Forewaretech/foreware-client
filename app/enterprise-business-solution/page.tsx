import PageBanner from "../components/Banners/PageBanner";

import ent_business_sol from "@/public/images/banners/ent_business_sol.webp";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import TileContent from "../components/Headers/TileContent";
import EntBizSols from "./EntBizSols";

import bizsol from "@/public/images/enterprise_biz_sols/bizsols.png";
import HeaderContent from "../components/Headers/HeaderContent";

const EnterpriseBusinessSolutionPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: ent_business_sol,
          alt: "Enterprise business solution banner",
        }}
        heading="Enterprise & Business Solutions that Power Your Business Growth"
        text="Reliable systems that bring clarity and control across your business."
        buttonText="Request a Consultation"
      />
      <SectionSpacing />
      <section className="container">
        <TileContent
          heading={"Business Solutions Designed for Modern Operations"}
          highlightText={"Overview"}
          content={
            <div>
              <p className="my-4">
                Enterprise and business solutions are the backbone of how
                organizations manage operations, people, customers, and
                compliance. When systems are disconnected, efficiency drops and
                visibility suffers.
              </p>
              <p>
                At Foreware, we deliver integrated business solutions that
                connect key functions across the organization, ensuring
                technology supports daily operations while remaining flexible as
                the business grows.
              </p>
            </div>
          }
          image={bizsol}
        />
        <SectionSpacing />
        <EntBizSols />
        <SectionSpacing />
        <HeaderContent
          buttonText="Request a Consultation"
          heading="Ready to Talk About the Right Business Solution?"
          center
        >
          Whether you're improving existing systems or introducing new ones, our
          team works with you to understand your needs and guide the next steps.
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default EnterpriseBusinessSolutionPage;
