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
import enterprise_scale from "@/public/images/enterprise_scale.svg";
import Image from "next/image";

const services = [
  {
    service: "Enterprise & Business Solutions",
    icon: enterprise_and_business,
  },
  {
    service: "Custom Software Development",
    icon: custom_soft_dev,
  },
  {
    service: "Data Analytics & AI Solutions",
    icon: data_analytics_ai,
  },
  {
    service: "System Integration & API Dev.",
    icon: sys_int_api,
  },
  {
    service: "IT Support, Consulting & Training",
    icon: it_sup_consulting_training,
  },
];

const OurServices = () => {
  return (
    <section className=" container">
      <ul className="flex gap-px">
        {services.map(({ icon, service }, i) => (
          <li key={service}>
            <OurService
              isFirst={i == 0}
              isLast={i == services.length - 1}
              icon={icon}
              service={service}
            />
          </li>
        ))}
      </ul>
      <ContentSpacing />
      <section className="flex justify-between">
        <div className="min-w-1/2">
          <HeaderContent heading="Enterprise Systems That Scale.">
            Modern enterprise solutions that unify operations, increase
            visibility, and drive efficiency across every function.
          </HeaderContent>
          <BaseSpacing />
          <Button>Talk to an Expert</Button>
        </div>

        <div className="min-w-1/2">
          <Image
            src={enterprise_scale}
            alt="Enterprise Systems That Scale"
            className=" w-full "
          />
        </div>
      </section>
    </section>
  );
};

export default OurServices;
