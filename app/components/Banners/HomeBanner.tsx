import homeBanner1 from "@/public/images/home_banner_1.png";
import Image from "next/image";
import Logo from "../Generics/Logo";
import Button from "../Buttons/Button";
import Navigations from "../Navigations/Navigations";

const HomeBanner = () => {
  return (
    <div className=" h-[66ppx] relative">
      <Image
        src={homeBanner1}
        alt="home banner one"
        width={1200}
        height={800}
        className="w-full h-full object-cover"
      />

      <section className="container absolute top-10">
        <div
          className=" w-full h-16 bg-white' flex items-center rounded-lg
         overflow-hidden"
        >
          <nav
            className=" p-4 bg-white/80 rounded-lg border-2 
            border-white w-full h-full flex justify-between items-center"
          >
            <div>
              <Logo />
            </div>
            <Navigations />
            <div>
              <Button>Contact Us</Button>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
