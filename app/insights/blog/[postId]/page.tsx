import { getSinglePost } from "@/app/lib/api";
import BlogPostDetailClient from "./BlogPostDetailClient";

interface Props {
  params: Promise<{
    postId: string;
  }>;
}

const BlogPostDetailPage = async ({ params }: Readonly<Props>) => {
  const postId = (await params).postId;
  const singlePost = await getSinglePost(postId);

  if (singlePost)
    return (
      <main>
        <BlogPostDetailClient postId={postId} initialData={singlePost} />
      </main>
    );
};

export default BlogPostDetailPage;
