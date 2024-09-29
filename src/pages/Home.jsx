import { Calculator } from "../components/Calculator";
import { Otzivi } from "../components/Otzivi";
import { Zaivka } from "../components/Zaivka";
import { Link, useParams } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { Header } from "../components/Header";
import { Articles } from "../components/Articles";
import { getWhoWeAre, getWhyWe, getProcessGarant } from "../sanityclient";

function Home() {
  const { anchor } = useParams();
  const blocks = {
    offers: useRef(null),
    articles: useRef(null),
    calculator: useRef(null),
    consultation: useRef(null),
  };

  const [WhoWeAreElement, setWhoWeAreElement] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await getWhoWeAre(); // Assuming getWhoWeAre returns a promise

      // Replace new lines and update the object
      data.text = data.text.replace(/\n/g, "<br />");

      // Set the modified data into state
      setWhoWeAreElement(data);
    };

    fetchData(); // Call the async function
  }, []);

  const [WhyWeElements, setWhyWeElements] = useState([]);

  useEffect(() => {
    const fetchWhyWe = async () => {
      const WhyWe = await getWhyWe();

      if (Object.keys(WhyWe).length > 0) {
        const WhyWeEls = Object.keys(WhyWe).map((i) => {
          const WhyWeEl = WhyWe[i];
          return {
            title: WhyWeEl.title,
          };
        });
        setWhyWeElements(WhyWeEls);
      }
    };

    fetchWhyWe();
  }, []);

  const [processgarantElements, setprocessgarantElements] = useState([]);

  useEffect(() => {
    const fetchprocessgarant = async () => {
      const processgarant = await getProcessGarant();

      if (Object.keys(processgarant).length > 0) {
        const processgarantEls = Object.keys(processgarant).map((i) => {
          const processgarantEl = processgarant[i];
          return {
            step: processgarantEl.step,
            title: processgarantEl.title,
            text: processgarantEl.text,
          };
        });
        setprocessgarantElements(processgarantEls);
      }
    };

    fetchprocessgarant();
  }, []);

  console.log(processgarantElements);

  const scrollToBlock = (anchor_ = "") => {
    if (anchor_ && blocks[anchor_]) {
      blocks[anchor_].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBlock(anchor);
  }, [anchor]);

  return (
    <>
      <div className="relative aspect-[16/9]">
        {/* Banner Section */}
        <section className="absolute inset-0 brightness-75">
          <img
            src="/img/stoimost.png"
            alt="stoimost"
            className="w-full h-full object-cover rounded-[40px]"
          />
        </section>
        <Header />
        <section className="relative z-10 px-7">
          <h1 className="uppercase text-[50px] lg:text-[80px] xl:text-[150px] text-white font-fam leading-[45px] lg:leading-[70px] xl:leading-[120px] ml-0 sm:ml-5 md:ml-10 lg:ml-14">
            Выбор,
          </h1>
          <h1 className="uppercase text-[50px] lg:text-[80px] xl:text-[150px] text-white font-fam leading-[45px] lg:leading-[70px] xl:leading-[120px] ml-0 sm:ml-16 md:ml-30 lg:ml-40">
            которому
          </h1>
          <h1 className="uppercase text-[50px] lg:text-[80px] xl:text-[150px] text-white font-fam leading-[45px] lg:leading-[70px] xl:leading-[120px] ml-0 sm:ml-28 md:ml-50 lg:ml-64">
            доверяют
          </h1>
          <div className="flex flex-row gap-8 mt-6 flex-wrap">
            <div className="flex flex-col">
              <p className="text-white text-2xl lg:text-4xl ml-0 md:ml-5 lg:ml-10 font-semibold">
                Гарантии от банков
              </p>
              <ul className="w-fit">
                <li className="text-white text-md lg:text-xl ml-0 md:ml-5 lg:ml-10">
                  • На участие и исполнение в рамках 44-ФЗ, 223-ФЗ, 615-ПП
                </li>
                <li className="text-white text-md lg:text-xl ml-0 md:ml-5 lg:ml-10">
                  • Гарантии для коммерческих целей
                </li>
              </ul>
            </div>
            <Link
              to="/consultation"
              className="text-xl lg:text-2xl bg-light-blue lg:py-5 lg:px-7 py-3 px-4 h-fit my-auto rounded-[25px] lg:rounded-[50px] text-white font-semibold"
            >
              Оформить&nbsp;гарантию
            </Link>
          </div>
        </section>

        {/* Cards Under the Banner */}
        <section className="flex mx-auto max-w-[1400px] relative z-10 translate-y-10">
          <ul className="flex flex-wrap w-full gap-5 justify-between mx-4">
            {[
              {
                title: "До 1млрд ₽",
                description: "Максимальный лимит на гарантии",
              },
              {
                title: "До 500млн ₽",
                description: "Максимальный размер гарантии",
              },
              { title: "До 120 месяцев", description: "Длительность гарантии" },
              { title: "От 1000₽", description: "Комиссия за оформление" },
            ].map((item, index) => (
              <li
                key={index}
                className="bg-white shadow-xl lg:min-h-[220px] p-3 lg:p-7 h-fit w-[45%] sm:w-[46%] lg:w-[48%] xl:w-[20rem] rounded-[25px] lg:rounded-[50px]"
              >
                <h3 className="text-blue text-xl lg:text-4xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-light-blue text-md lg:text-xl mt-3 leading-4">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Offers Section */}
      <section ref={blocks.offers}></section>
      <section className="px-7 mt-40">
        <div className="flex items-center p-5 bg-blue w-full max-w-96 rounded-[50px]">
          <div className="w-5 h-5 bg-light-blue rounded-full mr-2"></div>
          <span className="text-4xl font-extrabold text-white">
            Виды гарантий
          </span>
        </div>

        {/* Types of Guarantees */}
        <div className="flex flex-wrap justify-between rounded-[50px] min-h-44 h-fit mt-10 shadow-w">
          <ul className="flex flex-row flex-wrap lg:flex-nowrap justify-between gap-5 mx-auto px-8">
            {[
              {
                title: "Тендерная гарантия",
                description:
                  "Нужна для участия и исполнения в госзакупках по 44-ФЗ, 223-ФЗ, 615-ПП.",
              },
              {
                title: "Гарантия для бизнеса",
                description: "Подходит для коммерческих контрактов",
              },
              {
                title: "Гарантия на таможенные операции",
                description:
                  "Необходима для участников внешнеэкономической деятельности",
              },
              {
                title: "Гарантия на налоговые обязательства",
                description: "Предоставляется при отсрочке налоговых выплат",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex flex-col justify-between text-2xl text-blue font-semibold mt-4 w-full md:w-[47%] lg:w-1/4 pb-6"
              >
                <span>{item.title}</span>
                <p className="text-base text-xl mt-4 text-light-blue font-normal">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Process of Getting a Guarantee Block */}
        <div className="mt-40">
          <div className="flex items-center p-5 bg-blue w-full max-w-[650px] rounded-[50px] ml-auto">
            <div className="w-5 h-5 bg-light-blue rounded-full mr-2"></div>
            <span className="text-4xl font-extrabold text-white">
              Процесс получения гарантии
            </span>
          </div>

          <div className="flex flex-wrap justify-between rounded-[50px] min-h-44 mt-10 h-fit w-full shadow-w">
            <ul className="flex flex-row flex-wrap lg:flex-nowrap justify-between gap-5 mx-0 px-8 w-full">
              {processgarantElements.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-between text-2xl text-blue font-semibold mt-4 w-full md:w-[47%] lg:w-1/4 pb-6"
                >
                  <span>
                    {item.step}. {item.title}
                  </span>
                  <p className="text-base text-xl mt-4 text-light-blue font-normal">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section ref={blocks.calculator}></section>
      <Calculator />
      <section className="px-7">
        <div className="flex items-center p-5 px-7 bg-blue w-56 rounded-[50px] mt-40">
          <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
          <span className="text-3xl font-extrabold text-white ml-1 ">
            {WhoWeAreElement.title}
          </span>
        </div>
        <div>
          <p className="text-blue text-xl font-semibold mt-8 ">
            <div
              dangerouslySetInnerHTML={{
                __html: WhoWeAreElement.text,
              }}
            />
          </p>
        </div>

        <div className="flex items-center float-right p-5 px-7 bg-blue rounded-[50px] mt-40">
          <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
          <span className="text-3xl font-extrabold text-white ml-1 ">
            Почему выбирают нас
          </span>
        </div>

        <ul className="flex flex-row flex-wrap md:flex-nowrap gap-5 mt-72 w-full">
          {WhyWeElements.map((item, index) => (
            <li
              key={index}
              className="bg-white lg:min-h-80 h-full w-full lg:w-1/3 p-8 rounded-[50px] shadow-w"
            >
              <p className="text-blue text-2xl leading-7 font-medium">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <Otzivi />
      <section ref={blocks.articles}></section>
      <Articles />
      <section ref={blocks.consultation}></section>
      <Zaivka />
    </>
  );
}

export default Home;
