"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigations = [
  {
    text: "About Us",
    href: "",
  },
  {
    text: "Our Services",
    href: "",
  },
  {
    text: "Insight",
    href: "",
  },
  {
    text: "Career",
    href: "",
  },
];

const Navigations = () => {
  const pathname = usePathname();

  return (
    <ul className=" flex items-center ">
      {navigations.map(({ text, href }) => {
        const isActive = pathname === href;
        return (
          <li key={text}>
            <Link
              className={`${isActive ? "border-[#D9D9D9] bg-[#F2F2F2]" : ""} 
              py-2 px-4 rounded-lg text-xs duration-300 
              border-transparent border
             hover:border-[#D9D9D9]  hover:bg-[#F2F2F2]`}
              href={href}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigations;
