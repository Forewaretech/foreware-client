import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "../Buttons/Button";
import HeaderContent from "../Headers/HeaderContent";
import BaseSpacing from "../Spacing/BaseSpacing";
import CustomSoftware from "./CustomSoftware";
import DataAI from "./DataAI";
import Enterprise from "./Enterprise";
import Integration from "./Integration";
import SupportStrategy from "./SupportStrategy";

import custom_soft_dev from "@/public/icons/custom_soft_dev.svg";
import data_analytics_ai from "@/public/icons/data_analytics_ai.svg";
import enterprise_and_business from "@/public/icons/enterprise_and_business.svg";
import it_sup_consulting_training from "@/public/icons/it_sup_consulting_training.svg";
import sys_int_api from "@/public/icons/sys_int_api.svg";

import enterprise_scale from "@/public/images/services/enterprise_scale.svg";
import custom_software from "@/public/images/services/custom_software.svg";
import data_ai from "@/public/images/services/data_ai.svg";
import integration from "@/public/images/services/integration.svg";
import support_strategy from "@/public/images/services/support_strategy.svg";

import Image from "next/image";

export const services = [
  {
    heading: "Enterprise Software Solutions for Businesses of All Sizes.",
    text: `Modern enterprise solutions that unify operations, increase
          visibility, and drive efficiency across every function.`,
    buttonText: "Talk to an Expert",
    href: "/enterprise-business-solution",
    animatedImages: <Enterprise />,
    service: "Enterprise & Business Solutions",
    icon: enterprise_and_business,
    image: {
      src: enterprise_scale,
      alt: "Foreware Technologies - enterprise software solutions Nigeria",
    },
  },

  {
    heading: "Custom Software, Zero Compromise.",
    text: `Custom applications built specifically for your workflows and goals. Agile development that delivers exactly what you need and evolves with your requirements.`,
    subText: "Your vision, engineered to precision.",
    buttonText: "Talk to an Expert",
    href: "/custom-software-solution",
    animatedImages: <CustomSoftware />,
    service: "Custom Software Development",
    icon: custom_soft_dev,
    image: {
      src: custom_software,
      alt: "Foreware Technologies - custom software development Africa",
    },
  },

  {
    heading: "Data & AI That Drive Decisions.",
    text: `Advanced analytics and AI solutions that identify patterns, predict outcomes, and automate intelligence. Turn information into your strongest competitive asset.`,
    subText: "From data to decisive action.",
    buttonText: "Talk to an Expert",
    href: "/data-analytics-ai-solution",
    animatedImages: <DataAI />,

    service: "AI & Data Intelligence",
    icon: data_analytics_ai,
    image: {
      src: data_ai,
      alt: "Foreware Technologies - data and AI solutions for business",
    },
  },

  {
    heading: "Integration That Unifies Operations.",
    text: `Strategic API integration that makes your platforms work as one. Eliminate silos, accelerate workflows, and give leadership complete operational visibility.`,
    subText: "One ecosystem. Zero friction.",
    buttonText: "Talk to an Expert",
    href: "/system-integration-api-dev",
    animatedImages: <Integration />,

    service: "Systems & API Integration",
    icon: sys_int_api,
    image: {
      src: integration,
      alt: "Foreware Technologies - API integration services Nigeria",
    },
  },

  {
    heading: "Support & Strategy That Keep You Ahead.",
    text: `Proactive IT support, strategic consulting, and training programs that strengthen your team.`,
    subText: "Your partner in readiness and resilience.",
    buttonText: "Talk to an Expert",
    href: "/it-support-sonsulting-training",
    animatedImages: <SupportStrategy />,
    service: "IT Support & Consulting",
    icon: it_sup_consulting_training,

    image: {
      src: support_strategy,
      alt: "Foreware Technologies - IT support and consulting Nigeria",
    },
  },
];

interface Props {
  currentIdex: number;
}

const Services = ({ currentIdex }: Readonly<Props>) => {
  return (
    <>
      <section
        className=" flex-col justify-between gap-4
      hidden
      lg:flex
      lg:flex-row"
      >
        <div className="min-w-1/2">
          <HeaderContent heading={services[currentIdex].heading}>
            {services[currentIdex].text}
          </HeaderContent>
          {services[currentIdex].subText && (
            <p className=" italic mt-4">{services[currentIdex].subText}</p>
          )}
          <BaseSpacing />
          <Link href={services[currentIdex].href}>
            <Button> {services[currentIdex].buttonText}</Button>
          </Link>
        </div>

        <div>{services[currentIdex].animatedImages}</div>
      </section>

      <section className=" lg:hidden">
        {services.map((service) => (
          <article key={service.heading} className="my-20">
            <div className=" flex items-center gap-4 ">
              <div
                className=" min-h-14 min-w-14 rounded-lg flex items-center justify-center
              bg-primary"
              >
                <Image
                  src={service.icon}
                  alt={service.service}
                  className=" h-5 w-5"
                />
              </div>
              <h2 className=" text-lg font-semibold">{service.heading}</h2>
            </div>
            <div className="my-10">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                className=" w-full h-full "
              />
            </div>
            <p className="my-10">{service.text}</p>
            <div className="my-10">
              <Link href={service.href}>
                <Button>{service.buttonText}</Button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Services;
