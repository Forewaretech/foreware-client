import GridArticles from "../components/Grids/GridArticles";

import ind_spec_soft_sol from "@/public/images/custom_software_dev/ind_spec_soft_sol.png";
import web_app_dev from "@/public/images/custom_software_dev/web_app_dev.png";
import mobile_app_dev from "@/public/images/custom_software_dev/mobile_app_dev.png";
import ent_app_devi from "@/public/images/custom_software_dev/ent_app_dev.png";
import legacy_sys_modernization from "@/public/images/custom_software_dev/legacy_sys_modernization.png";

const cusSols = [
  {
    image: ind_spec_soft_sol,
    title: "Industry-Specific Software Solutions",
    content: [
      "Software solutions tailored to industry-specific workflows and operational requirements. Built to support real-world processes and regulatory needs.",
    ],
  },
  {
    image: web_app_dev,
    title: "Web Application Development",
    content: [
      "Secure and scalable web applications designed to support business operations. Built for performance, usability, and long-term maintainability.",
    ],
  },
  {
    image: mobile_app_dev,
    title: "Mobile Application Development",
    content: [
      "Mobile applications that support business processes and user engagement. Built for reliability, performance, and cross-platform usability.",
    ],
  },
  {
    image: ent_app_devi,
    title: "Enterprise Application Development",
    content: [
      "Enterprise-grade applications built to support complex business processes. Designed for scalability, security, and long-term operational use.",
    ],
  },
  {
    image: legacy_sys_modernization,
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
