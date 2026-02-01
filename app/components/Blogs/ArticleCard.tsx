import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Heading from "../Headers/Headings";

interface Props {
  image: StaticImageData | string;
  content: ReactNode;
  title: string;
}

const ArticleCard = ({ image, title, content }: Readonly<Props>) => {
  return (
    <article
      className="min-w-97.5' rounded-lg overflow-clip border 
    border-line bg-bg-2"
    >
      <div className="h-44">
        <Image
          src={image}
          alt={title}
          className=" h-full w-full object-cover"
        />
      </div>
      <div className="p-8 text-xs">
        <Heading variant="h4">{title}</Heading>
        <div>{content}</div>
      </div>
    </article>
  );
};

export default ArticleCard;
