import { queryOptions } from "@tanstack/react-query";
import postService from "./postService";

export const postQueries = {
  allPublishedPosts: () =>
    queryOptions({
      queryKey: ["posts", "published"] as const,
      queryFn: () =>
        postService.getAll({
          params: { status: "PUBLISHED" },
        }),
    }),
  detail: (id: string) =>
    queryOptions({
      queryKey: ["posts", id] as const,
      queryFn: () => postService.getOne(id),
      staleTime: 60_000,
    }),
};
