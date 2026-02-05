import GridArticles from "../components/Grids/GridArticles";

import api_design_dev from "@/public/images/syss_int_api_dev/api_design_dev.png";
import ent_syst_int from "@/public/images/syss_int_api_dev/ent_syst_int.png";
import middleware_int_pltfs from "@/public/images/syss_int_api_dev/middleware_int_pltfs.png";
import third_party_soft_int from "@/public/images/syss_int_api_dev/third_party_soft_int.png";

const sysIntAPIDevSols = [
  {
    image: ent_syst_int,
    title: "Enterprise System Integration",
    content: [
      "We integrate core enterprise systems to ensure data flows smoothly across business functions. This improves visibility, reduces duplication, and supports coordinated operations.",
    ],
  },
  {
    image: api_design_dev,
    title: "API Design & Development",
    content: [
      "We build APIs that allow systems to communicate securely and efficiently. Designed to support internal integrations, external partners, and future expansion.",
    ],
  },
  {
    image: third_party_soft_int,
    title: "Third-Party Software Integration",
    content: [
      "We connect third-party applications with existing business systems. This enables smoother workflows and better use of data across platforms.",
    ],
  },
  {
    image: middleware_int_pltfs,
    title: "Middleware & Integration Platforms",
    content: [
      "We implement middleware solutions that manage and orchestrate system integrations. This provides a stable layer for connecting applications, services, and data sources.",
    ],
  },
];

const SysIntAPIDevs = () => {
  return (
    <section className="lg:pt-10">
      <GridArticles articles={sysIntAPIDevSols} />
    </section>
  );
};

export default SysIntAPIDevs;
