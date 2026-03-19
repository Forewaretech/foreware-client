import PageBanner from "../components/Banners/PageBanner";

import data_analytics_ai from "@/public/images/banners/data_analytics_ai.webp";
import TileContent from "../components/Headers/TileContent";
import SectionSpacing from "../components/Spacing/SectionSpacing";

import overview from "@/public/images/data_analytics/overview.png";
import HeaderContent from "../components/Headers/HeaderContent";
import DataAnaAISols from "./DataAnaAISols";

const DataAnalyticsAISolutionPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{
          image: data_analytics_ai,
          alt: "data analytics and ai",
        }}
        heading={"Data Analytics & AI for Business Insight"}
        text={"We help businesses turn data into actionable insights."}
        buttonText="Request a Consultation"
      />
      <SectionSpacing />
      <section className="container">
        <TileContent
          image={overview}
          heading={"Data Analytics & AI"}
          highlightText={"Overview"}
          imageClassName="-"
          content={
            <div>
              <p className="my-4">
                Data sits at the centre of every business, but value only comes
                from understanding it. At Foreware, we help organizations make
                sense of their data, uncover patterns, and gain insight that
                supports better decisions across teams.
              </p>
            </div>
          }
        />
        <SectionSpacing />
        <DataAnaAISols />
        <SectionSpacing />
        <HeaderContent
          buttonText="Request a Consultation"
          heading="Let's Put Your Data to Work"
          center
        >
          If you're looking to get clearer insight from your data and make
          stronger decisions, we're ready to have that
        </HeaderContent>
        <SectionSpacing />
      </section>
    </main>
  );
};

export default DataAnalyticsAISolutionPage;
