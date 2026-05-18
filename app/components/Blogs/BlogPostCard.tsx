import { PostType } from "@/app/hooks/posts/postService";
import { formatLongDate } from "@/app/lib/formatLongDate";
import Image from "next/image";
import Link from "next/link";
import BaseSpacing from "../Spacing/BaseSpacing";

interface Props {
  post: PostType;
}

const BlogPostCard = ({ post }: Readonly<Props>) => {
  const dateLabel = formatLongDate(post.publishedAt ?? post.createdAt);

  return (
    <Link
      href={`/insights/blog/${post.slug}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
    >
      <article className="group relative h-60 sm:h-64 rounded-lg overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageTitle || post.title}
          className="object-cover"
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-x-0 bottom-0
            bg-dark-1 text-white p-4
            transform transition-all duration-300 ease-out
            translate-y-0 sm:translate-y-[60%] sm:group-hover:translate-y-0
          "
        >
          <h2 className="font-bold line-clamp-2">{post.title}</h2>

          {/* Expanded content: always visible on touch, hover-revealed on desktop */}
          <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <BaseSpacing />
            <p className="text-xs line-clamp-3">{post.summary}</p>
            <BaseSpacing />
            <div
              className="pt-4 text-xs flex items-center justify-between
              border-t-[0.5px] border-gray-800"
            >
              {dateLabel && <p className="opacity-80">{dateLabel}</p>}
              <span className="hover:opacity-100 opacity-80 duration-300">
                Read more
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;
