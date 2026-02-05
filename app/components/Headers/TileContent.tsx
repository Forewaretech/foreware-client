import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import HeaderContent from "./HeaderContent";
import clsx from "clsx";

interface Props {
  heading?: string;
  highlightText?: string;
  content: ReactNode;
  image: StaticImageData | string;
  imageClassName?: string;
  alt?: string;
  direction?: "ltr" | "rtl";
}
const TileContent = ({
  heading,
  highlightText,
  content,
  image,
  imageClassName,
  alt = "default",
  direction = "rtl",
}: Readonly<Props>) => {
  return (
    <div
      className=" flex flex-col gap-8 justify-between
      lg:flex-row"
    >
      <div
        className={`${direction === "rtl" ? " order-0" : "order-1"}
      lg:w-1/2`}
      >
        <HeaderContent heading={heading} highlightText={highlightText}>
          {content}
        </HeaderContent>
      </div>

      <div
        className={clsx(
          "rounded-2xl overflow-clip lg:w-1/2",
          `${!imageClassName && "max-h-70 lg:max-w-100 lg:h-125 lg:max-h-fit"}`,
          `${direction === "rtl" ? " order-1" : "order-0"}`,
          imageClassName,
        )}
      >
        <Image
          src={image}
          alt={heading || alt}
          className=" h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default TileContent;
