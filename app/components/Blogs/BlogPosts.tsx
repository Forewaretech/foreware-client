import BlogPostCard from "./BlogPostCard";

import posts1 from "@/public/images/posts/posts_1.jpg";
import posts2 from "@/public/images/posts/posts_2.jpg";
import posts3 from "@/public/images/posts/posts_3.jpg";
import posts4 from "@/public/images/posts/posts_4.jpg";

const posts = [
  {
    title:
      "Why a Cloud-First Strategy Is No Longer Optional for Growing Businesses",
    shortDescription:
      "At Foreware, we move beyond simple implementation to strategic enablement. Our focus is on delivering tailored, future-ready solutions that simplify complexity, unlock potential, and act as a true catalyst for growth.",
    image: posts1,
  },
  {
    title:
      "Harnessing AI and Automation: The New Twin Engines of Digital Transformation",
    shortDescription:
      "At Foreware, we move beyond simple implementation to strategic enablement. Our focus is on delivering tailored, future-ready solutions that simplify complexity, unlock potential, and act as a true catalyst for growth.",
    image: posts2,
  },
  {
    title:
      "Unlocking Insights: Why Data Platforms and Analytics Are Your Competitive Edge",
    shortDescription:
      "At Foreware, we move beyond simple implementation to strategic enablement. Our focus is on delivering tailored, future-ready solutions that simplify complexity, unlock potential, and act as a true catalyst for growth.",
    image: posts3,
  },
  {
    title: "From Data Chaos to Clarity: Building a Unified Analytics Platform",
    shortDescription:
      "At Foreware, we move beyond simple implementation to strategic enablement. Our focus is on delivering tailored, future-ready solutions that simplify complexity, unlock potential, and act as a true catalyst for growth.",
    image: posts4,
  },
];

const BlogPosts = () => {
  return (
    <section className=" flex gap-2.5">
      {posts.map(({ title, shortDescription, image }) => {
        return (
          <div key={title} className=" w-1/4">
            <BlogPostCard
              title={title}
              shortDescription={shortDescription}
              image={image}
            />
          </div>
        );
      })}
    </section>
  );
};

export default BlogPosts;
