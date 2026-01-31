import Image, { StaticImageData } from "next/image";
import GradientBorder from "./GradientBorder";

interface Props {
  image: StaticImageData | string;
  title: string;
  count: string;
}
const ServiceCard = ({ image, title, count }: Readonly<Props>) => {
  return (
    <GradientBorder>
      <div className="p-5 bg-white rounded-lg ">
        <div className="flex justify-end mb-5">
          <Image src={image} alt={title} />
        </div>

        <div>
          <p className="text-primary text-4xl font-bold">
            <span>{count}</span>
            <span>+</span>
          </p>
          <p className="text-xl font-light">{title}</p>
        </div>
      </div>
    </GradientBorder>
  );
};

export default ServiceCard;
