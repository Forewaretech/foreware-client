import { PostType } from "../hooks/posts/postService";

export const getPublishedPosts = async (): Promise<PostType[]> => {
  try {
    const res = await fetch(
      `${process.env.FOREWARE_API_URL}/posts?status=PUBLISHED`,
      {
        next: { tags: ["posts"] }, // Allows you to revalidate later
        cache: "no-store", // Use this if you want it always fresh, or revalidate: 3600
      },
    );

    if (!res.ok) return [];

    const json = await res.json();
    return json.data || []; // Safely access .data
  } catch (error) {
    console.error("Failed to load posts: ", error);
    return [];
  }
};
