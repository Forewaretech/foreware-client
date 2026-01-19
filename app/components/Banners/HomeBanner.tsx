import homeBanner1 from "@/public/images/home_banner_1.png";
import PageBanner from "./PageBanner";

const HomeBanner = () => {
  return (
    <div>
      <PageBanner
        bannerImage={{ image: homeBanner1, alt: "home banner one" }}
      />
    </div>
  );
};

export default HomeBanner;
