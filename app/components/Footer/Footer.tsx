import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../Buttons/Button";
import FooterBottom from "./FooterBottom";
import FooterInsights from "./FooterInsights";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterS from "./FooterS";
import FooterSolutions from "./FooterSolutions";
import Socials from "./Socials";
import BaseSpacing from "../Spacing/BaseSpacing";
import FooterContactUs from "./FooterContactUs";

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
        <FooterContactUs />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
