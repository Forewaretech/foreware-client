import React from "react";
import Heading from "../Headers/Headings";
import BaseSpacing from "../Spacing/BaseSpacing";
import Link from "next/link";
import QuickLink from "./QuickLink";

const FooterInsights = () => {
  return (
    <div>
      <Heading variant="h4" textColor="white">
        Insights
      </Heading>
      <BaseSpacing />
      <div className=" flex flex-col gap-4 text-white font-light">
        <QuickLink href="/careers">Blogs</QuickLink>
        <QuickLink href="/careers">Customer Stories</QuickLink>
        <QuickLink href="/careers">Downloads</QuickLink>
        <QuickLink href="/careers">Events</QuickLink>
      </div>
    </div>
  );
};

export default FooterInsights;
