import Image from "next/image";

import odoo from "@/public/images/partners/odoo.png";
import vanta from "@/public/images/partners/vanta.jpeg";
import webhr from "@/public/images/partners/webhr.png";
import wondersolft from "@/public/images/partners/wondersolft.png";
import xero from "@/public/images/partners/xero.png";
import zoho from "@/public/images/partners/zoho.png";

const partners = [
  {
    src: webhr,
    alt: "WebHR",
  },
  {
    src: xero,
    alt: "Xero",
  },
  {
    src: wondersolft,
    alt: "Wondersolft",
  },
  {
    src: odoo,
    alt: "Odoo",
  },
  {
    src: vanta,
    alt: "Vanta",
  },
  {
    src: zoho,
    alt: "Zoho",
  },
];

interface PartnerListProps {
  direction?: "up" | "down";
}

const PartnerList = ({ direction = "up" }: PartnerListProps) => {
  return (
    <ul
      className={`
        flex flex-col gap-2
        ${direction === "up" ? "animate-scrollUp" : "animate-scrollDown"}
      `}
    >
      {[...partners, ...partners].map(({ src, alt }, i) => (
        <li
          key={i}
          className="w-25 h-17.5 rounded-2xl overflow-hidden bg-white"
        >
          <Image src={src} alt={alt} className="h-full w-full object-contain" />
        </li>
      ))}
    </ul>
  );
};

export default PartnerList;
