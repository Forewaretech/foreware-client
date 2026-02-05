import ArticleCard from "../components/Blogs/ArticleCard";

import crm_solutions from "@/public/images/enterprise_biz_sols/crm_solutions.png";
import e_commer_solutions from "@/public/images/enterprise_biz_sols/e-commer-solutions.png";
import erp_solutions from "@/public/images/enterprise_biz_sols/erp_solutions.png";
import grc_solutions from "@/public/images/enterprise_biz_sols/grc_solutions.png";
import hr_solutions from "@/public/images/enterprise_biz_sols/hr_solutions.png";
import retail_pos_solutions from "@/public/images/enterprise_biz_sols/retail_pos_solutions.png";

const bizSols = [
  {
    title: "ERP Solutions",
    image: erp_solutions,
    content: [
      "Our ERP solutions help businesses manage finance, operations, inventory, and reporting through a single, connected system. We design and implement ERP platforms that improve visibility across teams and support better decision-making.",
      "We implement ERP solutions, including SAP systems, Microsoft Dynamics 365, Odoo, Zoho, and Sage, selecting the right platform based on your business size, complexity, and growth plans.",
    ],
  },
  {
    title: "CRM Solutions",
    image: crm_solutions,
    content: [
      "Our CRM solutions help organizations manage customer relationships, sales pipelines, and engagement across teams. We implement systems that improve customer visibility, streamline sales processes, and support more consistent follow-up.",
      "We work with leading CRM platforms, including Zoho CRM, Sage CRM, and Odoo CRM, and recommend the right solution based on your business needs and sales structure.",
    ],
  },
  {
    title: "HR Solutions",
    image: hr_solutions,
    content: [
      "Our HR solutions support workforce management across recruitment, payroll, performance, and compliance. We help organizations implement systems that improve visibility into employee data and streamline day-to-day HR operations.",
      "We recommend and implement HR platforms based on your workforce size, regulatory needs, and internal processes.",
    ],
  },
  {
    title: "GRC Solutions",
    image: grc_solutions,
    content: [
      "Our Governance, Risk, and Compliance (GRC) solutions help organizations manage risk, maintain compliance, and strengthen internal controls. We support the implementation of systems that improve oversight, audit readiness, and regulatory alignment.",
      "Our approach ensures governance and compliance processes are structured, traceable, and integrated into daily operations.",
    ],
  },
  {
    title: "E-commerce Solutions",
    image: e_commer_solutions,
    content: [
      "Our e-commerce solutions help businesses sell online while staying connected to core business systems. We design and implement platforms that support product management, orders, payments, and integrations with ERP and CRM systems.",
      "Our focus is on scalable e-commerce solutions that fit your business model and operational workflows.",
    ],
  },
  {
    title: "Retail & POS Solutions",
    image: retail_pos_solutions,
    content: [
      "Our retail and POS solutions support end-to-end store operations, including billing, inventory management, reporting, and multi-location control. We help retailers run their operations with better accuracy, visibility, and consistency across stores.",
      "Our retail solutions include platforms such as Wondersoft Retail & POS, supporting structured retail operations and scalable store management.",
    ],
  },
];

const EntBizSols = () => {
  return (
    <section className="lg:pt-10">
      <section
        className=" grid gap-4
    lg:grid-cols-2 xl:grid-cols-3"
      >
        {bizSols.map(({ title, image, content }) => {
          return (
            <ArticleCard
              key={title}
              image={image}
              content={
                <div>
                  {content.map((text, i) => (
                    <p key={i} className="my-4">
                      {text}
                    </p>
                  ))}
                </div>
              }
              title={title}
            />
          );
        })}
      </section>
    </section>
  );
};

export default EntBizSols;
