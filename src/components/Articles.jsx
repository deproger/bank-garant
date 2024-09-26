import React, { useEffect, useState } from "react";
import { getArticles } from "../sanityclient";
import { Link } from "react-router-dom";

export const Articles = () => {
  const [articleElements, setArticleElements] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles();

      if (Object.keys(articles).length > 0) {
        const articleEls = Object.keys(articles).map((i) => {
          const article = articles[i];
          return {
            body: `${article.pharagraph1.substr(0, 200)}...`,
            title: article.title1,
            href: `/article/${article._id}`,
          };
        });
        setArticleElements(articleEls);
      } else {
        setArticleElements([{ body: "Статьи недоступны." }]);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section id="stat">
      <div className="flex items-center p-5 px-7 bg-blue w-[98%] max-w-96 rounded-[50px] mt-40">
        <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
        <span className="text-3xl font-extrabold text-white ml-1 ">
          Полезные статьи
        </span>
      </div>

      <ul className="articles flex space-x-6 mt-10 justify-center">
        {articleElements.map((article, index) => (
          <li
            key={index}
            className="bg-white h-full w-full lg:w-1/3 rounded-[50px] shadow-w px-2 md:px-7 mx-1"
          >
            <h1 className=" mt-7 text-3xl text-blue font-medium font-fam">
              {article.title}
            </h1>
            <p className="text-blue text-lg mt-4 leading-7 font-medium ">
              {article.body}
            </p>
            <Link to={article.href} className="flex justify-center">
              <p className="flex justify-center mt-4 mb-4 p-3 px-7 bg-blue w-44 rounded-[15px] text-3xl font-semibold text-white">
                Подробнее
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
