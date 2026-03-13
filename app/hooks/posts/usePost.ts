import { useQuery } from "@tanstack/react-query";
import { postQueries } from "./postQueries";
import { PostType } from "./postService";

interface Options {
  id: string;
  initialData: PostType;
}
const usePost = (options: Options) =>
  useQuery(
    postQueries.detail({
      id: options.id,
      initialData: options.initialData,
    }),
  );

export default usePost;
