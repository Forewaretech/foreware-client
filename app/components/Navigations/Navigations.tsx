"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Buttons/Button";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Optional: npm install lucide-react
import { services } from "../Footer/FooterSolutions";

const navigations = [
  { text: "About Us", href: "/about" },
  {
    text: "Our Services",
    href: "/services",
    children: services,
  },
  {
    text: "Insight",
    href: "/insights",
    children: [
      { text: "Blog", href: "/insights/blog" },
      { text: "Customer Stories", href: "/#success-stories" },
      { text: "Downloads", href: "/insights/downloads" },
    ],
  },
  { text: "Career", href: "/careers" },
];

const Navigations = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <ul className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-2">
      {navigations.map((item) => {
        const hasChildren = !!item.children;
        const isActive =
          pathname === item.href ||
          item.children?.some((child) => pathname === child.href);

        return (
          <li
            key={item.text}
            className="relative group w-full lg:w-auto"
            onMouseEnter={() => setOpenDropdown(item.text)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {hasChildren ? (
              <div className="flex flex-col">
                <button
                  className={`${
                    isActive
                      ? "border-[#D9D9D9] bg-[#F2F2F2] font-semibold"
                      : "border-transparent"
                  } flex items-center justify-between gap-1 py-2 px-4 rounded-lg text-xs duration-300 border hover:border-[#D9D9D9] hover:bg-[#F2F2F2] w-full lg:w-auto`}
                >
                  {item.text}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${openDropdown === item.text ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`
                  lg:absolute lg:top-full lg:left-0 lg:pt-2 z-50
                  ${openDropdown === item.text ? "block" : "hidden"}
                  w-full lg:w-48
                `}
                >
                  <ul className="bg-white lg:shadow-xl lg:border border-[#D9D9D9] rounded-xl overflow-hidden p-1 flex flex-col gap-1">
                    {item.children?.map((child) => (
                      <li key={child.text}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-[11px] text-gray-600 hover:bg-[#F2F2F2] rounded-md transition-colors"
                        >
                          {child.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                className={`${
                  isActive
                    ? "border-[#D9D9D9] bg-[#F2F2F2] font-semibold"
                    : "border-transparent"
                } block py-2 px-4 rounded-lg text-xs duration-300 border hover:border-[#D9D9D9] hover:bg-[#F2F2F2]`}
                href={item.href}
              >
                {item.text}
              </Link>
            )}
          </li>
        );
      })}

      <li className="lg:hidden mt-4">
        <Link href="/contact">
          <Button>Contact Us</Button>
        </Link>
      </li>
    </ul>
  );
};
export default Navigations;
