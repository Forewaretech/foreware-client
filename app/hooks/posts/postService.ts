import { createResourceApi } from "@/app/lib/apiClient";

enum StatusEnum {
  DRAFT,
  PUBLISHED,
}

export type PostType = {
  id?: string;
  title: string;
  summary: string;
  slug: string;
  content?: string;
  category?: string;
  status?: StatusEnum;
  featuredImage: string;
  featuredImageTitle?: string;
  featuredImageCaption?: string;
  seoTitle?: string;
  seoDescription?: string;
  user?: { name: string };
  createdAt?: string;
};

const postService = createResourceApi<PostType>("posts");

export default postService;
