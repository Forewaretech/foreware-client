import Image, { StaticImageData } from "next/image";
import BaseSpacing from "../Spacing/BaseSpacing";
import Link from "next/link";

interface Props {
  title: string;
  shortDescription: string;
  image: StaticImageData | string;
}

const BlogPostCard = ({ title, shortDescription, image }: Readonly<Props>) => {
  return (
    <article className="group relative h-60 rounded-lg overflow-hidden cursor-default">
      <Image src={image} alt={title} fill className="object-cover" />

      {/* Overlay */}
      <div
        className="
          absolute inset-x-0 bottom-0
          bg-dark-1 text-white p-4
          transform transition-all duration-300 ease-out
          translate-y-[60%] group-hover:translate-y-0
        "
      >
        <h2 className="font-bold">{title}</h2>

        {/* Hidden content */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <BaseSpacing />
          <p className="text-xs">{shortDescription}</p>
          <BaseSpacing />
          <div
            className="pt-4 text-xs flex items-center justify-between 
            border-t-[0.5px] border-gray-800"
          >
            <p className="opacity-80">2-Oct-2025</p>
            <Link href="" className="hover:opacity-100 opacity-80 duration-300">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
