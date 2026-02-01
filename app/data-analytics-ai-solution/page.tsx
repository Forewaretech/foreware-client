import PageBanner from "../components/Banners/PageBanner";

import data_analytics_ai from "@/public/images/banners/data_analytics_ai.png";

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
    </main>
  );
};

export default DataAnalyticsAISolutionPage;
