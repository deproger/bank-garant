import React, { useEffect, useState } from "react";
import { getOtzivi, urlFor } from "../sanityclient";

export const Otzivi = () => {
  const [otziviElements, setOtziviElements] = useState([]);

  useEffect(() => {
    const fetchOtzivi = async () => {
      const otzivi = await getOtzivi();

      if (Object.keys(otzivi).length > 0) {
        const otziviEls = Object.keys(otzivi).map((i) => {
          const otziv = otzivi[i];
          return {
            title: otziv.title,
            image_src: urlFor(otziv.image).url(),
          };
        });
        setOtziviElements(otziviEls);
      } else {
        setOtziviElements([{ title: "Отзывы отсутствуют." }]);
      }
    };

    fetchOtzivi();
  }, []);

  return (
    <section className="px-7">
      <h3 className="flex text-6xl lg:text-8xl font-fam text-blue justify-center mt-40">
        Выданные гарантии
      </h3>
      <div className="flex flex-row flex-wrap max-w-full w-full">
        {otziviElements.map((item, index) => (
          <div key={index} className="flex flex-col w-full md:w-1/2 lg:w-1/4">
            <img className="w-full" src={item.image_src} alt={item.title} />
            <p className="text-2xl flex justify-center text-blue font-semibold">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
