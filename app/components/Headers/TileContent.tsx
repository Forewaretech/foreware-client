import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import HeaderContent from "./HeaderContent";
import clsx from "clsx";

interface Props {
  heading: string;
  highlightText: string;
  content: ReactNode;
  image: StaticImageData | string;
  imageClassName?: string;
}
const TileContent = ({
  heading,
  highlightText,
  content,
  image,
  imageClassName,
}: Readonly<Props>) => {
  return (
    <div
      className=" flex flex-col gap-8 justify-between
      lg:flex-row"
    >
      <HeaderContent heading={heading} highlightText={highlightText}>
        {content}
      </HeaderContent>

      <div
        className={clsx(
          "rounded-2xl overflow-clip",
          `${!imageClassName && "max-h-70 lg:max-w-100 lg:h-125 lg:max-h-fit"}`,
          imageClassName,
        )}
      >
        <Image
          src={image}
          alt={heading}
          className=" h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default TileContent;
