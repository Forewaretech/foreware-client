import Image from "next/image";

import forewareLogo from "@/public/images/foreware_logo.svg";
import forewareLogoWhite from "@/public/images/whitelogo.png";

interface Props {
  variant?: "white" | "black";
}
const Logo = ({ variant = "black" }: Readonly<Props>) => {
  return (
    <div>
      {variant === "black" ? (
        <Image src={forewareLogo} alt="Logo" />
      ) : (
        <Image src={forewareLogoWhite} alt="Logo White" className="w-32" />
      )}
    </div>
  );
};

export default Logo;
