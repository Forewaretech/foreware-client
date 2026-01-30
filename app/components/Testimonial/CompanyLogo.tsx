import React from "react";

interface CompanyLogoProps {
  src: string;
  alt: string;
  size: "small" | "large";
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  src,
  alt,
  size,
  className = "",
}) => {
  const sizeClasses =
    size === "small"
      ? "min-h-[60px] w-[60px] h-[60px]"
      : "min-h-[110px] w-[110px] h-[110px]";

  const imgSizeClasses = size === "small" ? "w-11" : "w-[94px]";

  return (
    <div
      className={`justify-center items-center aspect-[1/1] border flex gap-2.5 bg-white px-2 rounded-lg 
        border-solid border-[#D9D9D9] ${sizeClasses} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`aspect-[1] object-contain flex-1 shrink basis-[0%] ${imgSizeClasses}`}
      />
    </div>
  );
};
