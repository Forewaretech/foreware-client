import { useQuery } from "@tanstack/react-query";
import { postQueries } from "./postQueries";
import { PostType } from "./postService";

interface Props {
  intitialData?: PostType[];
}

const usePosts = (o?: Props) => useQuery(postQueries.allPublishedPosts());

export default usePosts;
