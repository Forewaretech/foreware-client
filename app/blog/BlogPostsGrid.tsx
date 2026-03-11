"use client";

import BlogPostCard from "../components/Blogs/BlogPostCard";
import { PostType } from "../hooks/posts/postService";
import usePosts from "../hooks/posts/usePosts";

interface Props {
  intitialData: PostType[];
}

const BlogPostsGrid = ({ intitialData }: Readonly<Props>) => {
  const { data: posts } = usePosts({ intitialData });
  console.log("posts: ", posts);

  return (
    <section className="container">
      <section className=" grid grid-cols-3 gap-4">
        {posts?.map(({ title, summary, image, id }) => (
          <BlogPostCard
            key={title}
            title={title}
            shortDescription={summary}
            image={image}
            href={`/blog/${id}`}
          />
        ))}
      </section>
    </section>
  );
};

export default BlogPostsGrid;
