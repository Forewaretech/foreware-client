import { clsx } from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CompanyLogoProps {
  src: StaticImageData | string;
  alt: string;
  size: "small" | "large";
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  src,
  alt,
  size,
  className,
}) => {
  const sizeClasses =
    size === "small"
      ? "min-h-[60px] w-[60px] h-[60px]"
      : "min-h-[110px] w-[110px] h-[110px]";

  const imgSizeClasses =
    size === "small" ? "min-w-11 min-h-11" : "min-w-[94px] min-h-[94px]";

  return (
    <div
      className={clsx(
        `justify-center items-center flex bg-white px-2 rounded-lg 
        border border-[#D9D9D9] ${sizeClasses} `,
        className,
      )}
    >
      <div
        className={`${imgSizeClasses} border border-[#D9D9D9] rounded-lg overflow-hidden`}
      >
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          className={`object-cover h-full w-full`}
        />
      </div>
    </div>
  );
};
