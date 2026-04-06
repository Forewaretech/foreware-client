import GridArticles from "../components/Grids/GridArticles";

import api_design_dev from "@/public/images/syss_int_api_dev/api_design_dev.png";
import ent_syst_int from "@/public/images/syss_int_api_dev/ent_syst_int.png";
import middleware_int_pltfs from "@/public/images/syss_int_api_dev/middleware_int_pltfs.png";
import third_party_soft_int from "@/public/images/syss_int_api_dev/third_party_soft_int.png";

const sysIntAPIDevSols = [
  {
    image: {
      src: ent_syst_int,
      alt: "Foreware Technologies - enterprise system integration services",
    },
    title: "Enterprise System Integration",
    content: [
      "We integrate core enterprise systems to ensure data flows smoothly across business functions. This improves visibility, reduces duplication, and supports coordinated operations.",
    ],
  },
  {
    image: {
      src: api_design_dev,
      alt: "Foreware Technologies - API design and development Nigeria",
    },
    title: "API Design & Development",
    content: [
      "We build APIs that allow systems to communicate securely and efficiently. Designed to support internal integrations, external partners, and future expansion.",
    ],
  },
  {
    image: {
      src: third_party_soft_int,
      alt: "Foreware Technologies - third-party software integration solutions",
    },
    title: "Third-Party Software Integration",
    content: [
      "We connect third-party applications with existing business systems. This enables smoother workflows and better use of data across platforms.",
    ],
  },
  {
    image: {
      src: middleware_int_pltfs,
      alt: "Foreware Technologies - middleware and integration platforms",
    },
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
