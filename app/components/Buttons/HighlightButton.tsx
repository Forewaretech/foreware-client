import Image from "next/image";
import bubble from "@/public/icons/bubble.svg";
import { PropsWithChildren } from "react";

const HighlightButton = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <button className=" border border-line rounded-lg py-2.5 px-4 flex items-center gap-4">
      <Image src={bubble} alt="bubble" />
      <span className=" text-secondary font-bold">{children}</span>
    </button>
  );
};

export default HighlightButton;
