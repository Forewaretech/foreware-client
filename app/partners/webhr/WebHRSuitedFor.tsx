import Heading from "../../components/Headers/Headings";
import Image from "next/image";

import IconHolder from "../../components/ui/icon_holder";

import branches_grow from "@/public/icons/branches_grow.svg";
import people from "@/public/icons/people.svg";
import person_settings from "@/public/icons/person_settings.svg";
import company from "@/public/icons/company.svg";

import webhr_desktop from "@/public/images/partners/webhr_desktop.svg";
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
    text: "HR teams transitioning from manual processes",
    icon: person_settings,
  },
  {
    text: "Companies seeking a reliable WebHR partner in Nigeria",
    icon: company,
  },
];

const WebHRSuitedFor = () => {
  return (
    <section
      className="bg-[#F3F4F6] grid 
    lg:grid-cols-2"
    >
      <div
        className="pl-4 py-4
        lg:py-20 lg:pl-48"
      >
        <Heading variant={"h2"}>Who WebHR Is Best Suited For</Heading>
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
          src={webhr_desktop}
          alt={
            "Foreware Technologies - WebHR solutions for growing businesses Nigeria"
          }
          className=" w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WebHRSuitedFor;
