import coming_soon_banner from "@/public/images/banners/coming_soon_banner.webp";
import PageBanner from "../components/Banners/PageBanner";

const ContactPage = () => {
  return (
    <main>
      <PageBanner
        bannerImage={{ image: coming_soon_banner, alt: "coming soon banner" }}
        heading="Coming Soon"
        text="In no time you will be able to reach out to us!"
      />
    </main>
  );
};

export default ContactPage;
