import Image from "next/image";

import odoo from "@/public/images/partners/odoo.png";
import riskcognuzaace from "@/public/images/partners/riskcognuzaace.png";
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
    src: riskcognuzaace,
    alt: "Riskcognuzaace",
  },
  {
    src: zoho,
    alt: "Zoho",
  },
];

const PartnerList = () => {
  return (
    <ul className="flex flex-col gap-2">
      {partners.map(({ src, alt }, i) => (
        <li key={i} className="w-25 h-17.5 rounded-2xl overflow-hidden">
          <Image src={src} alt={alt} className=" h-full w-full object-cover" />
        </li>
      ))}
    </ul>
  );
};

export default PartnerList;
