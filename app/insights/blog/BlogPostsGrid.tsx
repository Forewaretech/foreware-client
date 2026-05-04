"use client";

import BlogPostCard from "../../components/Blogs/BlogPostCard";
import { BlogSkeleton } from "../../components/Blogs/BlogPostsPreview";
import { PostType } from "../../hooks/posts/postService";
import usePosts from "../../hooks/posts/usePosts";
import NavButton from "@/app/components/Buttons/NavButton";
import { useState } from "react";

interface Props {
  intitialData: PostType[];
}

const PAGE_SIZE = 9;

const BlogPostsGrid = ({ intitialData }: Readonly<Props>) => {
  const { data: postsData, isLoading } = usePosts({
    intitialData: intitialData ? { data: intitialData } : undefined,
  });

  const posts = postsData?.data ?? [];
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const pagedPosts = posts.slice(start, start + PAGE_SIZE);

  if (isLoading && posts.length === 0) {
    return (
      <section className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <BlogSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  const goTo = (next: number) => {
    const clamped = Math.min(Math.max(1, next), totalPages);
    setPage(clamped);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pagedPosts.map(
          ({ title, summary, featuredImage, id, slug, createdAt }) => (
            <BlogPostCard
              key={id}
              post={{
                title,
                summary,
                featuredImage,
                slug,
                createdAt,
              }}
            />
          ),
        )}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10"
        >
          <NavButton
            onClick={() => goTo(safePage - 1)}
            disabled={safePage === 1}
          />

          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
              const active = n === safePage;
              return (
                <li key={n}>
                  <button
                    type="button"
                    onClick={() => goTo(n)}
                    aria-current={active ? "page" : undefined}
                    className={`min-w-10 h-10 px-3 rounded-full border-2 text-sm transition-colors duration-200 ${
                      active
                        ? "bg-black text-white border-black"
                        : "border-black text-foreground hover:bg-black hover:text-white"
                    }`}
                  >
                    {n}
                  </button>
                </li>
              );
            })}
          </ul>

          <NavButton
            onClick={() => goTo(safePage + 1)}
            isRight
            disabled={safePage === totalPages}
          />
        </nav>
      )}
    </section>
  );
};

export default BlogPostsGrid;
