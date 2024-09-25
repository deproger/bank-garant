import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItem, urlFor } from "../sanityclient";
import { Zaivka } from "../components/Zaivka";

const Article = () => {
  const { id } = useParams(); // Move this inside the component
  const [article, setArticle] = useState(null);
  console.log(id);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getItem(id);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return "";
  }

  console.log(article);

  return (
    <>
      <Header />
      <article className="max-w-[1200px] mx-auto">
        <h3 className="text-[#7BBAFF] text-4xl lg:text-8xl font-fam mt-20">
          {article.title1}
        </h3>
        <p className="text-[#0078D4] text-md lg:text-xl">
          {article.pharagraph1}
        </p>

        <h3 className="text-[#0078D4] text-3xl lg:text-6xl font-fam mt-20">
          {article.title2}
        </h3>
        <p className="text-[#0078D4] text-md lg:text-xl">
          {article.pharagraph2}
        </p>

        <h3 className="text-[#0078D4] text-3xl lg:text-6xl font-fam mt-20">
          {article.title3}
        </h3>
        <p className="text-[#0078D4] text-md lg:text-xl">
          {article.pharagraph3}
        </p>
      </article>
      <Zaivka />
    </>
  );
};

export default Article;
