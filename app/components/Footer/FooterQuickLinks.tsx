import Link from "next/link";
import Heading from "../Headers/Headings";
import BaseSpacing from "../Spacing/BaseSpacing";
import Badge from "../ui/badge";
import QuickLink from "./QuickLink";

const FooterQuickLinks = () => {
  return (
    <div>
      <Heading variant="h4" textColor="white">
        Quick links
      </Heading>
      <BaseSpacing />
      <div className=" flex flex-col gap-4 text-white font-light">
        <QuickLink href="/about">About Us</QuickLink>

        <div className=" flex items-center gap-2">
          <QuickLink href="/careers">Careers</QuickLink>
          <Badge>Hiring</Badge>
        </div>
      </div>
    </div>
  );
};

export default FooterQuickLinks;
