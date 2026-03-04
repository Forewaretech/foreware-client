"use client";

import { Menu, X } from "lucide-react";
import Button from "../Buttons/Button";
import Logo from "../Generics/Logo";
import Navigations from "../Navigations/Navigations";
import { useState } from "react";
import Link from "next/link";

const BannerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className=" w-full h-16 flex items-center rounded-lg
         flex-wrap "
    >
      <nav
        className={`${!isOpen && "rounded-lg"} p-4 bg-white/80  border-2 rounded-t-lg
        border-white w-full h-full flex justify-between items-center
            
          lg:rounded-lg`}
      >
        <div
          className=" flex items-center justify-between min-w-full
        lg:min-w-fit"
        >
          <Link href="/">
            <Logo />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-5 h-5">
              <Menu
                className={`absolute inset-0 w-5 h-5 transition-all duration-300 ease-out
                  ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
              />
              <X
                className={`absolute inset-0 w-5 h-5 transition-all duration-300 ease-out
                  ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
              />
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navigations />
        </div>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden lg:block">
          <Button>Contact Us</Button>
        </Link>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out
          min-w-full
          ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav
          className={`p-4 bg-white/80 backdrop-blur-sm border border-t-0 border-border/50
            rounded-b-lg shadow-sm transform transition-transform duration-300 ease-out
            
            ${isOpen ? "translate-y-0" : "-translate-y-2"}`}
        >
          <Navigations />
        </nav>
      </div>
    </div>
  );
};

export default BannerNav;
