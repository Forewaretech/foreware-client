import { queryOptions } from "@tanstack/react-query";
import postService, { PostType } from "./postService";

export const postQueries = {
  allPublishedPosts: (options: { initialData?: { data: PostType[] } }) => {
    const { initialData } = options;
    return queryOptions({
      initialData: initialData,
      queryKey: ["posts", "published"] as const,
      queryFn: () =>
        postService.getAll({
          params: { status: "PUBLISHED" },
        }),
    });
  },
  detail: (options: { id: string; initialData: PostType }) => {
    const { id, initialData } = options;

    return queryOptions({
      initialData: initialData,
      queryKey: ["posts", "published", id] as const,
      queryFn: () => postService.getOne(id),
      enabled: !!id,
      staleTime: 60_000,
    });
  },
};
