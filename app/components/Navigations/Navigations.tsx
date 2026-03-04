"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Buttons/Button";

const navigations = [
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Our Services",
    href: "/services",
  },
  {
    text: "Insight",
    href: "/insights",
  },
  {
    text: "Career",
    href: "/careers",
  },
];

const Navigations = () => {
  const pathname = usePathname();

  return (
    <ul
      className=" flex flex-col items-start gap-4 
    lg:flex-row lg:items-center lg:gap-0"
    >
      {navigations.map(({ text, href }) => {
        const isActive = pathname === href;
        return (
          <li key={text}>
            <Link
              className={`${
                isActive
                  ? "border-[#D9D9D9] bg-[#F2F2F2] font-semibold"
                  : "border-transparent"
              } 
              py-2 px-4 rounded-lg text-xs duration-300 
               border
             hover:border-[#D9D9D9]  hover:bg-[#F2F2F2]`}
              href={href}
            >
              {text}
            </Link>
          </li>
        );
      })}

      <li className=" lg:hidden">
        <Link href="/contact">
          <Button>Contact Us</Button>
        </Link>
      </li>
    </ul>
  );
};

export default Navigations;
