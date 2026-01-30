import Heading from "../Headers/Headings";
import BaseSpacing from "../Spacing/BaseSpacing";
import QuickLink from "./QuickLink";

const FooterSolutions = () => {
  return (
    <div>
      <Heading variant="h4" textColor="white">
        Solutions
      </Heading>
      <BaseSpacing />
      <div className=" flex flex-col gap-4 text-white font-light">
        <QuickLink href="/careers">Data Service and AI</QuickLink>

        <QuickLink href="/careers">Security</QuickLink>

        <QuickLink href="/careers">Digital Transformation</QuickLink>
      </div>
    </div>
  );
};

export default FooterSolutions;
