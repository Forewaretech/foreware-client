import Heading from "../../components/Headers/Headings";
import Image from "next/image";

import IconHolder from "../../components/ui/icon_holder";

import branches_grow from "@/public/icons/branches_grow.svg";
import people from "@/public/icons/people.svg";
import calc from "@/public/icons/calc.svg";
import odoo_suited_for_rrotate from "@/public/images/partners/odoo_suited_for_rrotate.svg";
import BaseSpacing from "../../components/Spacing/BaseSpacing";

const suits = [
  {
    text: "Growing businesses",
    icon: branches_grow,
  },
  {
    text: "Mid-sized organizations",
    icon: people,
  },
  {
    text: "Teams moving away from spreadsheets or disconnected CRM and ERP systems",
    icon: calc,
  },
];

const OdooSuitedFor = () => {
  return (
    <section
      className="bg-[#F3F4F6] grid 
    lg:grid-cols-2"
    >
      <div
        className="pl-4 py-4
        lg:py-20 lg:pl-48"
      >
        <Heading variant={"h2"}>Who Odoo Is Best Suited For</Heading>
        <BaseSpacing />
        <ul>
          {suits.map(({ text, icon }) => (
            <li key={text} className="flex gap-6 items-center my-2.5">
              <IconHolder size="md" icon={<Image src={icon} alt={text} />} />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="overflow-clip">
        <Image
          src={odoo_suited_for_rrotate}
          alt={"odoo suited for"}
          className=" w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default OdooSuitedFor;
