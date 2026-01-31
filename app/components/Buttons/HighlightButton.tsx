import Image from "next/image";
import bubble from "@/public/icons/bubble.svg";
import { PropsWithChildren } from "react";

interface Props {
  variant?: "white" | "transparent";
}

const HighlightButton = ({
  variant,
  children,
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <button
      className={`${variant === "white" ? "bg-white" : ""} 
      border border-line rounded-lg py-2.5 
      px-4 flex items-center gap-4`}
    >
      <Image src={bubble} alt="bubble" />
      <span className=" text-secondary font-bold">{children}</span>
    </button>
  );
};

export default HighlightButton;
