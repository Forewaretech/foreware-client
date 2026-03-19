"use client";

import DigitalTransformers from "@/app/components/Transformers/DigitalTransformers";
import BlogPostCard from "../../components/Blogs/BlogPostCard";
import { BlogSkeleton } from "../../components/Blogs/BlogPostsPreview";
import { PostType } from "../../hooks/posts/postService";
import usePosts from "../../hooks/posts/usePosts";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";

interface Props {
  intitialData: PostType[];
}

const BlogPostsGrid = ({ intitialData }: Readonly<Props>) => {
  const { data: postsData, isLoading } = usePosts({
    intitialData: intitialData ? { data: intitialData } : undefined,
  });

  const posts = postsData?.data ?? [];

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
    <section>
      <section className="container">
        <section className=" grid grid-cols-3 gap-4">
          {posts?.map(({ title, summary, featuredImage, id, slug }) => (
            <BlogPostCard
              key={id}
              post={{
                title,
                summary,
                featuredImage,
                slug,
              }}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default BlogPostsGrid;
