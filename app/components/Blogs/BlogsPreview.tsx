import Link from "next/link";
import HeaderContent from "../Headers/HeaderContent";
import { ArrowRight, ArrowRight2 } from "iconsax-react";
import BaseSpacing from "../Spacing/BaseSpacing";
import ContentSpacing from "../Spacing/ContentSpacing";
import NavButton from "../Buttons/NavButton";
import BlogPostsPreview from "./BlogPostsPreview";
import { PostType } from "@/app/hooks/posts/postService";
import { getPublishedPosts } from "@/app/lib/api";
import { Suspense } from "react";

const BlogsPreview = async () => {
  const intitialData = await getPublishedPosts();

  // 1. Early return if no data (avoids rendering empty headers)
  if (!intitialData || intitialData.length === 0) return null;

  // 2. We are guaranteed to have data here

  if (!(intitialData.length === 0))
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <section className=" pb-20">
          <section>
            <div
              className="container flex flex-col gap-4 lg:items-end justify-between
        lg:flex-row"
            >
              <div>
                <HeaderContent highlightText="Blog" heading="News & Insights">
                  Stay ahead with perspectives on digital transformation,
                  enterprise technology, and AI strategy.
                </HeaderContent>
              </div>
            </div>
          </section>
          <BlogPostsPreview intitialData={intitialData} />
        </section>
      </Suspense>
    );
};

export default BlogsPreview;
