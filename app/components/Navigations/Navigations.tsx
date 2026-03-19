"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Buttons/Button";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
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
  {
    text: "Partners",
    href: "/partners",
    children: [
      { text: "Odoo", href: "/partners/odoo" },
      { text: "Zoho", href: "/partners/zoho" },
      { text: "WebHR", href: "/partners/webhr" },
      { text: "Xero", href: "/partners/xero" },
      { text: "Wondersoft", href: "/partners/wondersoft" },
      { text: "Risk Cognizance", href: "/partners/risk-cognizance" },
    ],
  },
  { text: "Career", href: "/careers" },
];

const Navigations = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (text: string) => {
    setOpenDropdown(openDropdown === text ? null : text);
  };

  return (
    <ul
      ref={navRef}
      className="flex flex-col items-start gap-2 
      
      lg:flex-row lg:items-center lg:gap-2 w-full lg:w-auto"
    >
      {navigations.map((item) => {
        const hasChildren = !!item.children;
        const isOpen = openDropdown === item.text;
        const isActive =
          pathname === item.href ||
          item.children?.some((child) => pathname === child.href);

        return (
          <li key={item.text} className="relative w-full lg:w-auto">
            {hasChildren ? (
              <div className="flex flex-col w-full lg:w-auto">
                <button
                  onClick={() => toggleDropdown(item.text)}
                  className={`${
                    isActive || isOpen
                      ? "border-[#D9D9D9] bg-[#F2F2F2] font-semibold"
                      : "border-transparent text-gray-700"
                  } flex items-center justify-between gap-1 py-2 px-4 rounded-lg text-xs duration-300 border 
                  hover:border-[#D9D9D9] hover:bg-[#F2F2F2] w-full lg:w-auto text-left`}
                >
                  {item.text}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`
                    lg:absolute lg:top-full lg:left-0 lg:pt-2 z-50
                    ${isOpen ? "flex" : "hidden"}
                    flex-col w-full lg:w-56
                  `}
                >
                  <ul
                    className="bg-gray-50 lg:bg-white lg:shadow-xl lg:border 
                  border-[#D9D9D9] rounded-xl overflow-hidden p-1 flex flex-col gap-1 mt-1 lg:mt-0 ml-4 lg:ml-0"
                  >
                    {item.children?.map((child) => (
                      <li key={child.text}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2 text-[11px] rounded-md transition-colors ${
                            pathname === child.href
                              ? "bg-[#F2F2F2] font-bold text-black"
                              : "text-gray-600 hover:bg-[#F2F2F2]"
                          }`}
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
                    : "border-transparent text-gray-700"
                } block py-2 px-4 rounded-lg text-xs duration-300 border hover:border-[#D9D9D9] hover:bg-[#F2F2F2]`}
                href={item.href}
              >
                {item.text}
              </Link>
            )}
          </li>
        );
      })}

      <li className="lg:hidden mt-4 w-full px-4">
        <Link href="/contact" className="block w-full">
          <Button className="w-full">Contact Us</Button>
        </Link>
      </li>
    </ul>
  );
};

export default Navigations;
