"use client";

import PageBanner from "@/app/components/Banners/PageBanner";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Support from "@/app/components/Transformers/Support";
import { PostType } from "@/app/hooks/posts/postService";
import usePost from "@/app/hooks/posts/usePost";
import fallback_banner from "@/public/images/banners/fallback_banner.png";
import { formatDistanceToNow } from "date-fns";
import { Timer, User2 } from "lucide-react";

interface Props {
  postId: string;
  initialData: PostType;
}

const BlogPostDetailClient = ({ postId, initialData }: Readonly<Props>) => {
  const { data: postDetail, isLoading } = usePost({ id: postId, initialData });

  console.log("postDetail: ", postDetail);

  if (!postDetail) return <p>Not Found</p>;

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
        <div className=" h-11 bg-gray-200 container flex items-center gap-12">
          <p className="flex items-center gap-2">
            <Timer size={18} />
            <span>
              {formatDistanceToNow(new Date(postDetail.createdAt!), {
                addSuffix: true,
              })}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <User2 size={18} />
            <span>Foreware Team</span>
          </p>
        </div>
        <SectionSpacing />
        <section className="container ">
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
