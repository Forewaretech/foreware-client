import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../Buttons/Button";
import FooterBottom from "./FooterBottom";
import FooterInsights from "./FooterInsights";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterS from "./FooterS";
import FooterSolutions from "./FooterSolutions";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className=" ">
      <div className=" bg-dark-1">
        <div className="container">
          <div
            className="flex flex-col gap-4 justify-between border-b border-white py-20 
          lg:flex-row"
          >
            <FooterSolutions />
            <FooterS />
            <FooterQuickLinks />
            <FooterInsights />
          </div>
        </div>
        {/* <SectionSpacing /> */}

        <div className=" border-t-[0.2px] container py-20">
          <Button>Contact Us</Button>
          <div
            className="flex mt-5 flex-col
          lg:flex-row"
          >
            <div className="w-1/2 flex flex-col gap-6">
              <div className="flex gap-4">
                <Phone className=" text-white" />
                <div>
                  <p className=" font-bold clear-both text-white">Phone</p>
                  <p className=" text-white/90">+234 816 4699 021</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className=" text-white" />
                <div>
                  <p className=" font-bold clear-both text-white">Email</p>
                  <p className=" text-white/90">
                    info@forewaretechnologies.com
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
              <div className="flex gap-4">
                <MapPin className=" text-white" />
                <div>
                  <p className=" font-bold clear-both text-white">
                    Office Address
                  </p>
                  <p className=" text-white/90">
                    Nurudeen Street, Anifowoshe, Ikeja, Lagos, Nigeria
                  </p>
                </div>
              </div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
