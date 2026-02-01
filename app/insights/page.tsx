import PageBanner from "../components/Banners/PageBanner";

import coming_soon_banner from "@/public/images/banners/coming_soon_banner.webp";

const InsightsPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{ image: coming_soon_banner, alt: "coming soon banner" }}
        heading="Coming Soon"
        text="Stay tuned for expert insights, latest trends, and valuable resources to help you stay ahead. We’re preparing something special for you!"
      />
    </main>
  );
};

export default InsightsPage;
