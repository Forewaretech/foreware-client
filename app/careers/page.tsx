import coming_soon_banner from "@/public/images/banners/coming_soon_banner.webp";
import PageBanner from "../components/Banners/PageBanner";

const CareersPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{ image: coming_soon_banner, alt: "coming soon banner" }}
        heading="Coming Soon"
        text="We're preparing to open our doors to talented individuals who want to build meaningful solutions, grow their skills, and shape the future with us. Check back soon."
      />
    </main>
  );
};

export default CareersPage;
