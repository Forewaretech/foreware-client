import { PostType } from "@/app/hooks/posts/postService";
import Image from "next/image";
import Link from "next/link";
import BaseSpacing from "../Spacing/BaseSpacing";

interface Props {
  post: PostType;
}

const formatDate = (value?: string) => {
  if (!value) return "";
  try {
    return new Date(value).toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

const BlogPostCard = ({ post }: Readonly<Props>) => {
  const dateLabel = formatDate(post.createdAt);

  return (
    <Link
      href={`/insights/blog/${post.slug}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
    >
      <article className="group relative h-72 sm:h-80 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageTitle || post.title}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
        />

        {/* Gradient for legibility behind the title */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        {/* Sliding info panel */}
        <div
          className="
            absolute inset-x-0 bottom-0
            bg-dark-1 text-white p-4
            transform transition-all duration-300 ease-out
            translate-y-[65%] group-hover:translate-y-0
          "
        >
          <h2 className="font-bold line-clamp-2">{post.title}</h2>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <BaseSpacing />
            <p className="text-xs line-clamp-3">{post.summary}</p>
            <BaseSpacing />
            <div
              className="pt-4 text-xs flex items-center justify-between
              border-t-[0.5px] border-gray-800"
            >
              {dateLabel && <p className="opacity-80">{dateLabel}</p>}
              <span className="opacity-80">Read more</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;
