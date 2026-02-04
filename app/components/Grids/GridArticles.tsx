import { StaticImageData } from "next/image";
import ArticleCard from "../Blogs/ArticleCard";

interface Props {
  articles: {
    title: string;
    image: StaticImageData | string;
    content: string[];
  }[];
}

const GridArticles = ({ articles }: Readonly<Props>) => {
  return (
    <section
      className=" grid gap-4
    lg:grid-cols-2 xl:grid-cols-3"
    >
      {articles.map(({ title, image, content }) => {
        return (
          <ArticleCard
            key={title}
            image={image}
            content={
              <div>
                {content.map((text, i) => (
                  <p key={i} className="my-4">
                    {text}
                  </p>
                ))}
              </div>
            }
            title={title}
          />
        );
      })}
    </section>
  );
};

export default GridArticles;
