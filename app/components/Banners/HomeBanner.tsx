import homeBanner1 from "@/public/images/banners/home_banner_1.png";
import PageBanner from "./PageBanner";

const HomeBanner = () => {
  return (
    <div>
      <PageBanner
        buttonText="Explore our solutions"
        heading="We Build Systems That Scale."
        text="We partner with businesses of all sizes to create custom software, 
        data solutions, and AI systems that grow with your business."
        bannerImage={{ image: homeBanner1, alt: "home banner one" }}
      />
    </div>
  );
};

export default HomeBanner;
