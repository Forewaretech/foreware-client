import homeBanner1 from "@/public/images/banners/home_banner_1.webp";
import PageBanner from "./PageBanner";

const HomeBanner = () => {
  return (
    <div>
      <PageBanner
        buttonText="Explore our solutions"
        heading="Intelligent Technology Solutions Built for Your Business."
        text=" No matter the size of your business, we make sure technology never holds you back. From system deployments to custom software, AI, and day-to-day IT support, we deliver technology solutions that meet your business needs and drive real value for your investment."
        bannerImage={{ image: homeBanner1, alt: "home banner one" }}
      />
    </div>
  );
};

export default HomeBanner;
