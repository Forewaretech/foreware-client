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
  status?: StatusEnum;
  featuredImage: string;
  featuredImageTitle?: string;
  featuredImageCaption?: string;
  content?: string;
  seoTitle?: string;
  seoDescription?: string;
  category?: string;
  user?: { name: string };
  createdAt?: string;
  updatedAt?: string;
};

const postService = createResourceApi<PostType>("posts");

export default postService;
