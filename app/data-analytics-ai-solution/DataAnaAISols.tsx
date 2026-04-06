import React from "react";
import GridArticles from "../components/Grids/GridArticles";

import biz_intel_report from "@/public/images/data_analytics/biz_intel_report.png";
import data_ware_data_eng from "@/public/images/data_analytics/data_ware_data_eng.png";
import pred_ana_forecasting from "@/public/images/data_analytics/pred_ana_forecasting.png";
import ml_ai_md_dev from "@/public/images/data_analytics/ml_ai_md_dev.png";
import big_data_adv_analytics from "@/public/images/data_analytics/big_data_adv_analytics.png";

const dataMLAISols = [
  {
    image: {
      src: biz_intel_report,
      alt: "Foreware Technologies - business intelligence services Nigeria",
    },
    title: "Business Intelligence & Reporting",
    content: [
      "We build dashboards and reports that give leaders clear visibility into performance. This helps teams track what matters and respond faster with confidence.",
    ],
  },
  {
    image: {
      src: data_ware_data_eng,
      alt: "Foreware Technologies – data warehousing and data engineering Nigeria",
    },
    title: "Data Warehousing & Data Engineering",
    content: [
      "We bring data together from different systems into a single, reliable source. This creates a strong foundation for reporting, analytics, and long-term insight.",
    ],
  },
  {
    image: {
      src: pred_ana_forecasting,
      alt: "Foreware Technologies - predictive analytics and forecasting solutions",
    },
    title: "Predictive Analytics & Forecasting",
    content: [
      "We help businesses use data to understand trends and anticipate what comes next. This supports planning, forecasting, and more informed strategic decisions.",
    ],
  },
  {
    image: {
      src: ml_ai_md_dev,
      alt: "Foreware Technologies - machine learning and AI development Nigeria",
    },
    title: "Machine Learning & AI Model Development",
    content: [
      "We apply machine learning and AI where it makes practical sense for the business. Our focus is on insight, automation, and real-world outcomes.",
    ],
  },
  {
    image: {
      src: big_data_adv_analytics,
      alt: "Foreware Technologies - big data and advanced analytics solutions",
    },
    title: "Big Data & Advanced Analytics",
    content: [
      "We work with large and complex datasets to uncover deeper insights. This helps organizations see patterns that are not visible through basic reporting.",
    ],
  },
];

const DataAnaAISols = () => {
  return (
    <section className="lg:pt-10">
      <GridArticles articles={dataMLAISols} />
    </section>
  );
};

export default DataAnaAISols;
