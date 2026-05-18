"use client";

import PageBanner from "@/app/components/Banners/PageBanner";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Support from "@/app/components/Transformers/Support";
import { PostType } from "@/app/hooks/posts/postService";
import usePost from "@/app/hooks/posts/usePost";
import { formatLongDate, wasMeaningfullyUpdated } from "@/app/lib/formatLongDate";
import fallback_banner from "@/public/images/banners/fallback_banner.png";
import { CalendarDays, RefreshCw, User2 } from "lucide-react";

interface Props {
  postId: string;
  initialData: PostType;
}

const BlogPostDetailClient = ({ postId, initialData }: Readonly<Props>) => {
  const { data: postDetail, isLoading } = usePost({ id: postId, initialData });

  if (!postDetail) return <p>Not Found</p>;

  const publishedSource = postDetail.publishedAt ?? postDetail.createdAt;
  const publishedLabel = formatLongDate(publishedSource);
  const showUpdated = wasMeaningfullyUpdated(
    publishedSource,
    postDetail.updatedAt,
  );

  if (postDetail)
    return (
      <div>
        <PageBanner
          bannerImage={{
            image: postDetail?.featuredImage ?? fallback_banner,
            alt: postDetail?.title,
          }}
          heading={postDetail?.title}
          text={postDetail?.summary}
        />
        <div className="bg-gray-200">
          <div className="container py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base">
            {publishedLabel && (
              <p className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>Published {publishedLabel}</span>
              </p>
            )}
            {showUpdated && (
              <p className="flex items-center gap-2 text-gray-600">
                <RefreshCw size={16} />
                <span className="text-sm">
                  Updated {formatLongDate(postDetail.updatedAt)}
                </span>
              </p>
            )}
            <p className="flex items-center gap-2">
              <User2 size={18} />
              <span>{postDetail?.author ?? "Foreware Team"}</span>
            </p>
          </div>
        </div>
        <SectionSpacing />
        <section className="container">
          <p className="border-l-4 border-primary pl-4">{postDetail.summary}</p>
          <ContentSpacing />
          <div
            dangerouslySetInnerHTML={{ __html: postDetail.content! }}
            className="editor-content"
          />
          <SectionSpacing />
          <Support />
          <SectionSpacing />
        </section>
      </div>
    );
};

export default BlogPostDetailClient;
