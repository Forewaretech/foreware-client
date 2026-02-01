import Image, { StaticImageData } from "next/image";

interface Props {
  service: string;
  icon: StaticImageData;
  isFirst?: boolean;
  isLast?: boolean;
}

const OurService = ({ icon, service, isFirst, isLast }: Readonly<Props>) => {
  return (
    <article
      className={`${isFirst ? " rounded-l-lg rounded-bl-lg bg-primary h-41 lg:h-39 " : "h-38.5 lg:h-36.5"}  
      ${isLast && " rounded-r-lg"}
      min-w-39.75 bg-foreware-3
    text-white px-6 py-4`}
    >
      <Image src={icon} alt={service} />
      <p className="pt-4 font-bold">{service}</p>
    </article>
  );
};

export default OurService;
