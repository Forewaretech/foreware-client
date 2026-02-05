import GridArticles from "../components/Grids/GridArticles";

import it_strategy from "@/public/images/it_support/it_strategy.png";
import app_sup_maint from "@/public/images/it_support/app_sup_maint.jpg";
import inft_cloud_sup from "@/public/images/it_support/inft_cloud_sup.png";
import cyb_risk_adv from "@/public/images/it_support/cyb_risk_adv.png";
import user_tr_chg_mgt from "@/public/images/it_support/user_tr_chg_mgt.jpg";

const iTSupportSols = [
  {
    image: it_strategy,
    title: "IT Strategy & Digital Transformation Consulting",
    content: [
      "We help organizations think clearly about their technology direction. This includes reviewing existing systems, identifying gaps, and planning practical improvements that align with business goals.",
    ],
  },
  {
    image: app_sup_maint,
    title: "Application Support & Maintenance",
    content: [
      "We provide ongoing support to keep business applications stable and available. Our focus is on resolving issues quickly and ensuring systems continue to support daily operations.",
    ],
  },
  {
    image: inft_cloud_sup,
    title: "Infrastructure & Cloud Support",
    content: [""],
  },
  {
    image: cyb_risk_adv,
    title: "Cybersecurity & Risk Advisory",
    content: [
      "We help organizations understand their security risks and strengthen their defenses.Our advisory services focus on protecting systems, data, and business continuity.",
    ],
  },
  {
    image: user_tr_chg_mgt,
    title: "User Training & Change Management",
    content: [
      "We support users through training and change programs that make technology easier to adopt.This helps teams feel confident using systems and reduces resistance to change.",
    ],
  },
];

const ITSupportSols = () => {
  return (
    <section className="lg:pt-10">
      <GridArticles articles={iTSupportSols} />
    </section>
  );
};

export default ITSupportSols;
