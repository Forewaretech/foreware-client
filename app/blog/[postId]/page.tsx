import PageBanner from "@/app/components/Banners/PageBanner";
import { posts } from "@/app/components/Blogs/BlogPostsPreview";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";

import fallback_banner from "@/public/images/banners/fallback_banner.png";
import { formatDistanceToNow } from "date-fns";
import { Group, Timer, User2 } from "lucide-react";

interface Props {
  params: Promise<{
    postId: string;
  }>;
}

const BlogPostDetailPage = async ({ params }: Readonly<Props>) => {
  const postId = (await params).postId;

  // const postDetail = posts.find((p) => (p.id = postId));

  return (
    <main>
      {/* <PageBanner
        bannerImage={{
          image: postDetail?.image ?? fallback_banner,
          alt: postDetail?.title,
        }}
        heading={postDetail?.title}
        text={postDetail?.shortDescription}
      /> */}
      <div className=" h-11 bg-gray-200 container flex items-center gap-12">
        <p className="flex items-center gap-2">
          <Timer size={18} />
          <span>
            {formatDistanceToNow(new Date(Date.now()), {
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
      <section className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fuga rem
          dolorum iste maxime explicabo. Dolorum veniam voluptates distinctio
          quisquam quis vero excepturi placeat eveniet illo quia, facere numquam
          accusantium.
        </p>
      </section>
      <SectionSpacing />
    </main>
  );
};

export default BlogPostDetailPage;
