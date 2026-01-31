import Link from "next/link";
import HeaderContent from "../Headers/HeaderContent";
import { ArrowRight, ArrowRight2 } from "iconsax-react";
import BaseSpacing from "../Spacing/BaseSpacing";
import ContentSpacing from "../Spacing/ContentSpacing";
import NavButton from "../Buttons/NavButton";
import BlogPosts from "./BlogPosts";

const BlogsPreview = () => {
  return (
    <section className=" pb-20">
      <section>
        <div className="container flex items-end justify-between">
          <div>
            <HeaderContent highlightText="Blog" heading="News & Insights">
              Stay ahead with perspectives on digital transformation, enterprise
              technology, and AI strategy.
            </HeaderContent>
            <BaseSpacing />
            <Link
              href={""}
              className="flex gap-1 items-center text-primary font-light"
            >
              <span>View All</span>{" "}
              <ArrowRight2 size={20} color="currentColor" />
            </Link>
          </div>
          <div className=" flex gap-4 items-center">
            <NavButton />
            <NavButton isRight />
          </div>
        </div>
      </section>
      <ContentSpacing />
      <section className="px-10">
        <BlogPosts />
      </section>
    </section>
  );
};

export default BlogsPreview;
