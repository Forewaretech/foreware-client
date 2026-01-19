import Image, { StaticImageData } from "next/image";
import BannerNav from "./BannerNav";
import BannerContent from "./BannerContent";

interface Props {
  bannerImage: {
    image: StaticImageData | string;
    alt: string;
  };
}
const PageBanner = ({ bannerImage }: Readonly<Props>) => {
  return (
    <div className=" h-167.25 relative">
      <Image
        src={bannerImage.image}
        alt={bannerImage.alt}
        width={1200}
        height={800}
        className="w-full h-full object-cover"
      />

      <section className="container absolute top-10">
        <BannerNav />
        <div className=" py-20">
          <BannerContent
            heading={"We Build Systems That Scale."}
            text={
              "We partner with businesses of all sizes to create custom software, data solutions, and AI systems that grow with your business."
            }
            buttonText={"Explore our solutions"}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className=" w-5 h-2 bg-primary rounded-xs"></div>
          <div className=" w-5 h-1 border border-[#D9D9D9] bg-white rounded-xs"></div>
          <div className=" w-5 h-1 border border-[#D9D9D9] bg-white rounded-xs"></div>
          <div className=" w-5 h-1 border border-[#D9D9D9] bg-white rounded-xs"></div>
          <div className=" w-5 h-1 border border-[#D9D9D9] bg-white rounded-xs"></div>
          <div className=" w-5 h-1 border border-[#D9D9D9] bg-white rounded-xs"></div>
        </div>
      </section>
    </div>
  );
};

export default PageBanner;
