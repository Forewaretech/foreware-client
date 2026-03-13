import { PostType } from "@/app/hooks/posts/postService";
import Image from "next/image";
import Link from "next/link";
import BaseSpacing from "../Spacing/BaseSpacing";

interface Props {
  post: PostType;
}

const BlogPostCard = ({ post }: Readonly<Props>) => {
  return (
    <article className="group relative h-60 rounded-lg overflow-hidden cursor-default">
      <Image
        src={post.featuredImage}
        alt={post.featuredImageTitle || post.title}
        className="object-cover"
        fill
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-x-0 bottom-0
          bg-dark-1 text-white p-4
          transform transition-all duration-300 ease-out
          translate-y-[60%] group-hover:translate-y-0
        "
      >
        <h2 className="font-bold line-clamp-2">{post.title}</h2>

        {/* Hidden content */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <BaseSpacing />
          <p className="text-xs line-clamp-3">{post.summary}</p>
          <BaseSpacing />
          <div
            className="pt-4 text-xs flex items-center justify-between 
            border-t-[0.5px] border-gray-800"
          >
            <p className="opacity-80">2-Oct-2025</p>
            <Link
              href={`/insights/blog/${post.slug}`}
              className="hover:opacity-100 opacity-80 duration-300"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
