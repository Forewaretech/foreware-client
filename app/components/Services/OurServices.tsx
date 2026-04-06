"use client";

import ContentSpacing from "../Spacing/ContentSpacing";
import OurService from "./OurService";

import { useState } from "react";
import Services, { services } from "./Services";

// const services = [
//   {
//     service: "Enterprise & Business Solutions",
//     icon: enterprise_and_business,
//     href: "enterprise-business-solution",
//   },
//   {
//     service: "Custom Software Development",
//     icon: custom_soft_dev,
//     href: "custom-software-solution",
//   },
//   {
//     service: "AI & Data Intelligence",
//     icon: data_analytics_ai,
//     href: "data-analytics-ai-solution",
//   },
//   {
//     service: "Systems & API Integration",
//     icon: sys_int_api,
//     href: "system-integration-api-dev",
//   },
//   {
//     service: "IT Support & Consulting",
//     icon: it_sup_consulting_training,
//     href: "it-support-sonsulting-training",
//   },
// ];

const OurServices = () => {
  const [index, setIndex] = useState(0);

  return (
    <section>
      <ul
        className="gap-px hidden
      lg:flex"
      >
        {services.map(({ icon, service }, i) => {
          const isActive = i === index;

          return (
            <li key={service + i} className="min-w-1/5 w-1/5">
              <button
                className="inline-block w-full"
                onClick={() => setIndex(i)}
              >
                <OurService
                  isActive={isActive}
                  isFirst={i == 0}
                  isLast={i == services.length - 1}
                  icon={icon}
                  service={service}
                />
              </button>
            </li>
          );
        })}
      </ul>
      <ContentSpacing />
      <Services currentIdex={index} />
    </section>
  );
};

export default OurServices;
