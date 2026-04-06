import OurService from "./OurService";
import ContentSpacing from "../Spacing/ContentSpacing";
import HeaderContent from "../Headers/HeaderContent";
import Button from "../Buttons/Button";
import BaseSpacing from "../Spacing/BaseSpacing";

import custom_soft_dev from "@/public/icons/custom_soft_dev.svg";
import data_analytics_ai from "@/public/icons/data_analytics_ai.svg";
import enterprise_and_business from "@/public/icons/enterprise_and_business.svg";
import it_sup_consulting_training from "@/public/icons/it_sup_consulting_training.svg";
import sys_int_api from "@/public/icons/sys_int_api.svg";
import Image from "next/image";
import Link from "next/link";
import Services from "./Services";

const services = [
  {
    service: "Enterprise & Business Solutions",
    icon: enterprise_and_business,
    href: "enterprise-business-solution",
  },
  {
    service: "Custom Software Development",
    icon: custom_soft_dev,
    href: "custom-software-solution",
  },
  {
    service: "AI & Data Intelligence",
    icon: data_analytics_ai,
    href: "data-analytics-ai-solution",
  },
  {
    service: "Systems & API Integration",
    icon: sys_int_api,
    href: "system-integration-api-dev",
  },
  {
    service: "IT Support & Consulting",
    icon: it_sup_consulting_training,
    href: "it-support-sonsulting-training",
  },
];

const OurServices = () => {
  return (
    <section>
      <ul
        className="flex gap-px overflow-auto has-scrollbar
      scroll-snap-type-inline-mandatory overscroll-behavior-inline-contain"
      >
        {services.map(({ icon, service, href }, i) => (
          <li key={service} className="scroll-snap-align-start">
            <Link href={href}>
              <OurService
                isFirst={i == 0}
                isLast={i == services.length - 1}
                icon={icon}
                service={service}
              />
            </Link>
          </li>
        ))}
      </ul>
      <ContentSpacing />
      <Services currentIdex={0} />
    </section>
  );
};

export default OurServices;
