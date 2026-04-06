import GridArticles from "../components/Grids/GridArticles";

import ind_spec_soft_sol from "@/public/images/custom_software_dev/ind_spec_soft_sol.png";
import web_app_dev from "@/public/images/custom_software_dev/web_app_dev.png";
import mobile_app_dev from "@/public/images/custom_software_dev/mobile_app_dev.png";
import ent_app_devi from "@/public/images/custom_software_dev/ent_app_dev.png";
import legacy_sys_modernization from "@/public/images/custom_software_dev/legacy_sys_modernization.png";

const cusSols = [
  {
    image: {
      src: ind_spec_soft_sol,
      alt: "Foreware Technologies - industry-specific software solutions Africa",
    },
    title: "Industry-Specific Software Solutions",
    content: [
      "Software solutions tailored to industry-specific workflows and operational requirements. Built to support real-world processes and regulatory needs.",
    ],
  },
  {
    image: {
      src: web_app_dev,
      alt: "Foreware Technologies - web application development Nigeria",
    },
    title: "Web Application Development",
    content: [
      "Secure and scalable web applications designed to support business operations. Built for performance, usability, and long-term maintainability.",
    ],
  },
  {
    image: {
      src: mobile_app_dev,
      alt: "Foreware Technologies – mobile app development solutions Nigeria",
    },
    title: "Mobile Application Development",
    content: [
      "Mobile applications that support business processes and user engagement. Built for reliability, performance, and cross-platform usability.",
    ],
  },
  {
    image: {
      src: ent_app_devi,
      alt: "Foreware Technologies – enterprise application development Africa",
    },
    title: "Enterprise Application Development",
    content: [
      "Enterprise-grade applications built to support complex business processes. Designed for scalability, security, and long-term operational use.",
    ],
  },
  {
    image: {
      src: legacy_sys_modernization,
      alt: "Foreware Technologies – legacy system modernization services",
    },
    title: "Legacy System Modernization",
    content: [
      "Modernizing outdated systems to improve performance, security, and usability. Focused on extending system value while reducing operational risk.",
    ],
  },
];

const CusSoftSols = () => {
  return (
    <section className="lg:pt-10">
      <GridArticles articles={cusSols} />
    </section>
  );
};

export default CusSoftSols;
