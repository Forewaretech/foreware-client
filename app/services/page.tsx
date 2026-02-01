import PageBanner from "../components/Banners/PageBanner";

import coming_soon_banner from "@/public/images/banners/coming_soon_banner.webp";

const ServicesPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{ image: coming_soon_banner, alt: "coming soon banner" }}
        heading="Coming Soon"
        text="Our range of services is being upgraded to serve you better. Exciting solutions and innovative offerings are on the way!"
      />
    </main>
  );
};

export default ServicesPage;
