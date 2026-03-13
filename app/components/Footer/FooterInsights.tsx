import Heading from "../Headers/Headings";
import BaseSpacing from "../Spacing/BaseSpacing";
import QuickLink from "./QuickLink";

const FooterInsights = () => {
  return (
    <div>
      <Heading variant="h4" textColor="white">
        Insights
      </Heading>
      <BaseSpacing />
      <div className=" flex flex-col gap-4 text-white font-light">
        <QuickLink href="/insights/blog">Blogs</QuickLink>
        <QuickLink href="/#success-stories">Customer Stories</QuickLink>
        <QuickLink href="/insights/downloads">Downloads</QuickLink>
      </div>
    </div>
  );
};

export default FooterInsights;
