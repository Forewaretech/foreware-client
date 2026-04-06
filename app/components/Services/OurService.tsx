import Image, { StaticImageData } from "next/image";

interface Props {
  service: string;
  icon: StaticImageData;
  isFirst?: boolean;
  isLast?: boolean;
  isActive?: boolean;
}

const OurService = ({
  icon,
  service,
  isFirst,
  isLast,
  isActive,
}: Readonly<Props>) => {
  return (
    <article
      className={`            
        ${isActive ? " rounded-b-lg bg-primary h-41 lg:h-39 " : "h-38.5 lg:h-36.5"}  
        ${isFirst && " rounded-l-lg rounded-bl-lg"}  
        ${isLast && " rounded-r-lg"}
      min-w-39.75 bg-foreware-3
    text-white text-left px-6 py-4`}
    >
      <Image src={icon} alt={service} />
      <p className="pt-4 font-bold">{service}</p>
    </article>
  );
};

export default OurService;
