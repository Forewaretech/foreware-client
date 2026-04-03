import Heading from "../Headers/Headings";
import BaseSpacing from "../Spacing/BaseSpacing";
import QuickLink from "./QuickLink";

export const services = [
  {
    text: "Enterprise & Business Solutions",
    href: "enterprise-business-solution",
  },
  {
    text: " Custom Software Development.",
    href: "/custom-software-solution",
  },
  {
    text: "AI & Data Intelligence",
    href: "/data-analytics-ai-solution",
  },
  {
    text: "Systems & API Integration",
    href: "/system-integration-api-dev",
  },
  {
    text: "IT Support & Consulting",
    href: "/it-support-sonsulting-training",
  },
];

const FooterSolutions = () => {
  return (
    <div>
      <Heading variant="h4" textColor="white">
        Services
      </Heading>
      <BaseSpacing />
      <div className=" flex flex-col gap-4 text-white font-light">
        {services.slice(0, 3).map(({ text, href }) => (
          <QuickLink key={text} href={href}>
            {text}
          </QuickLink>
        ))}
      </div>
    </div>
  );
};

export default FooterSolutions;
