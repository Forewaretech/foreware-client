import blog_banner from "@/public/images/banners/blog_banner.webp";
import PageBanner from "../../components/Banners/PageBanner";
import SectionSpacing from "../../components/Spacing/SectionSpacing";
import { getPublishedPosts } from "../../lib/api";
import BlogPostsGrid from "./BlogPostsGrid";
import DigitalTransformers from "@/app/components/Transformers/DigitalTransformers";
import { Newspaper } from "lucide-react"; // Or any icon you prefer

const BlogPage = async () => {
  const intitialData = await getPublishedPosts();
  const isEmpty = intitialData.length === 0;

  return (
    <main>
      <PageBanner
        bannerImage={{ image: blog_banner, alt: "blog banner" }}
        heading="News & Insights"
        text="Stay ahead with perspectives on digital transformation, enterprise technology, and AI strategy."
      />

      <SectionSpacing />

      {isEmpty ? (
        <section className="max-w-5xl mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
            <Newspaper className="w-10 h-10 text-muted-foreground/50" />
          </div>
          <h2 className="text-2xl font-semibold mb-3">
            Fresh Insights are Brewing
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            We're currently preparing deep dives into the latest trends and IT
            strategies.
          </p>
        </section>
      ) : (
        <BlogPostsGrid intitialData={intitialData} />
      )}

      <SectionSpacing />
      <DigitalTransformers />
      <SectionSpacing />
    </main>
  );
};
export default BlogPage;
