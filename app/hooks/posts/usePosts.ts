import { useQuery } from "@tanstack/react-query";
import { postQueries } from "./postQueries";
import { PostType } from "./postService";

interface Props {
  intitialData?: { data: PostType[] };
}

const usePosts = (options: Props) =>
  useQuery(
    postQueries.allPublishedPosts({ initialData: options.intitialData }),
  );

export default usePosts;
