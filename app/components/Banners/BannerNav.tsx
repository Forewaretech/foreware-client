import React from "react";
import Logo from "../Generics/Logo";
import Navigations from "../Navigations/Navigations";
import Button from "../Buttons/Button";

const BannerNav = () => {
  return (
    <div
      className=" w-full h-16 bg-white' flex items-center rounded-lg
         overflow-hidden"
    >
      <nav
        className=" p-4 bg-white/80 rounded-lg border-2 
            border-white w-full h-full flex justify-between items-center"
      >
        <div>
          <Logo />
        </div>
        <Navigations />
        <div>
          <Button>Contact Us</Button>
        </div>
      </nav>
    </div>
  );
};

export default BannerNav;
