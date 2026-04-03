import FooterBottom from "./FooterBottom";
import FooterContactUs from "./FooterContactUs";
import FooterInsights from "./FooterInsights";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterS from "./FooterS";
import FooterSolutions from "./FooterSolutions";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-dark-1">
        <div className="container">
          <div
            className="flex flex-col gap-4 justify-between border-b border-white py-20 
          lg:flex-row"
          >
            <FooterSolutions />
            <FooterS />
            <div className="my-6 lg:my-0">
              <FooterQuickLinks />
            </div>
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
