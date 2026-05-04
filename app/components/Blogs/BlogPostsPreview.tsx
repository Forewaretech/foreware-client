"use client";

import { PostType } from "@/app/hooks/posts/postService";
import usePosts from "@/app/hooks/posts/usePosts";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavButton from "../Buttons/NavButton";
import BlogPostCard from "./BlogPostCard";

interface Props {
  intitialData?: PostType[];
}

export const BlogSkeleton = () => (
  <div className="min-w-[calc(100%-24px)] lg:w-1/4 lg:min-w-1/4 animate-pulse">
    <div className="aspect-video w-full bg-gray-200 rounded-lg mb-4" />
    <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
    <div className="h-3 w-full bg-gray-200 rounded mb-1" />
    <div className="h-3 w-5/6 bg-gray-200 rounded" />
  </div>
);

const BlogPostsPreview = ({ intitialData }: Readonly<Props>) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const { data: postsData, isLoading } = usePosts({
    intitialData: intitialData ? { data: intitialData } : undefined,
  });

  const posts = (postsData?.data ?? []).slice(0, 10);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const overflow = el.scrollWidth > el.clientWidth + 1;
      setHasOverflow(overflow);
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(
        overflow && el.scrollLeft + el.clientWidth < el.scrollWidth - 1,
      );
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    Array.from(el.children).forEach((child) => ro.observe(child));

    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [posts.length]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (isLoading && posts.length === 0) {
    return (
      <section className="flex gap-2.5 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <BlogSkeleton key={i} />
        ))}
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <>
      <div className="flex gap-4 items-center mb-8 justify-between container">
        <div>
          <Link
            href="/insights/blog"
            className="flex gap-1 items-center text-primary font-light"
          >
            <span>View All</span>
            <ArrowRight2 size={20} color="currentColor" />
          </Link>
        </div>
        {hasOverflow && (
          <div className="flex gap-4 items-center">
            <NavButton
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
            />
            <NavButton
              onClick={() => scroll("right")}
              isRight
              disabled={!canScrollRight}
            />
          </div>
        )}
      </div>

      <div className="relative px-4 lg:px-10">
        <section
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth
        snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[31%] xl:min-w-[24%] snap-start"
            >
              <BlogPostCard post={post} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default BlogPostsPreview;
