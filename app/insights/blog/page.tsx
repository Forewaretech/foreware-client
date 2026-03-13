import blog_banner from "@/public/images/banners/blog_banner.webp";
import PageBanner from "../../components/Banners/PageBanner";
import SectionSpacing from "../../components/Spacing/SectionSpacing";
import { getPublishedPosts } from "../../lib/api";
import BlogPostsGrid from "./BlogPostsGrid";

const BlogPage = async () => {
  const intitialData = await getPublishedPosts();

  // 1. Early return if no data (avoids rendering empty headers)
  if (!intitialData || intitialData.length === 0) return null;

  // 2. We are guaranteed to have data here
  if (!(intitialData.length === 0))
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
