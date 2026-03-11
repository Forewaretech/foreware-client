import blog_banner from "@/public/images/banners/blog_banner.webp";
import PageBanner from "../components/Banners/PageBanner";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import BlogPostsGrid from "./BlogPostsGrid";
import { PostType } from "../hooks/posts/postService";

const BlogPage = async () => {
  let intitialData: PostType[] = [];

  try {
    const res = await fetch(`${process.env.FOREWARE_API_URL}/posts`);
    if (res.ok) intitialData = await res.json();
    console.log("intitialData: ", intitialData);
  } catch (error) {
    console.log("Failed to load posts: ", error);
  }

  return (
    <main>
      <PageBanner
        bannerImage={{ image: blog_banner, alt: "blog banner" }}
        heading="News & Insights"
        text="Stay ahead with perspectives on digital transformation, enterprise technology, and AI strategy."
      />
      <SectionSpacing />
      <BlogPostsGrid intitialData={intitialData} />
      <SectionSpacing />
    </main>
  );
};

export default BlogPage;
