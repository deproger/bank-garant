import { Calculator } from "../components/Calculator";
import { Otzivi } from "../components/Otzivi";
import { Zaivka } from "../components/Zaivka";
import { useParams } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { Header } from "../components/Header";
import { Articles } from "../components/Articles";

function Home() {
  const { anchor } = useParams();
  const blocks = {
    offers: useRef(null),
    articles: useRef(null),
    calculator: useRef(null),
    consultation: useRef(null),
  };

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
            className="w-full h-full object-cover rounded-[30px]"
          />
        </section>
        <Header />
        <section className="relative z-10 px-7">
          <h1 className="text-[50px] lg:text-[80px] xl:text-[150px] text-white font-fam ml-0 sm:ml-5 md:ml-10 lg:ml-14">
            Выбор,
          </h1>
          <h1 className="text-[50px] lg:text-[80px] xl:text-[150px] text-white font-fam ml-0 sm:ml-16 md:ml-30 lg:ml-40">
            которому
          </h1>
          <h1 className="text-[50px] lg:text-[80px] xl:text-[150px] text-white font-fam ml-0 sm:ml-28 md:ml-50 lg:ml-64">
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
            <a
              href="#"
              className="text-xl lg:text-2xl bg-light-blue lg:py-5 lg:px-7 py-3 px-4 h-fit my-auto rounded-[25px] lg:rounded-[50px] text-white font-semibold"
            >
              Оформить&nbsp;гарантию
            </a>
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
                title: "До 300млн ₽",
                description: "Максимальный размер гарантии",
              },
              { title: "До 120 месяцев", description: "Длительность гарантии" },
              { title: "От 1000₽", description: "Комиссия за оформление" },
            ].map((item, index) => (
              <li
                key={index}
                className="bg-white shadow-xl p-3 lg:p-7 h-fit w-[45%] sm:w-[46%] lg:w-[48%] xl:w-[20rem] 2xl:w-[27rem] rounded-[25px] lg:rounded-[50px]"
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
        <main>
          <div className="flex flex-wrap justify-between rounded-[50px] min-h-44 h-fit mt-10 shadow-w">
            <ul className="flex flex-row flex-wrap lg:flex-nowrap justify-between gap-5 mx-auto px-8">
              {[
                {
                  title: "Тендерная гарантия",
                  description:
                    "Нужна для участия в госзакупках по 44-ФЗ, 223-ФЗ, 615-ПП.",
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
                  className="flex flex-col justify-between text-2xl text-blue font-semibold mt-4 w-[47%] lg:w-1/4 pb-6"
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
          <div className="flex items-center p-5 bg-blue w-full max-w-[650px] rounded-[50px] mt-40 float-right">
            <div className="w-5 h-5 bg-light-blue rounded-full mr-2"></div>
            <span className="text-4xl font-extrabold text-white">
              Процесс получения гарантии
            </span>
          </div>

          <div className="flex flex-wrap justify-between rounded-[50px] min-h-44 h-fit mt-80 w-full shadow-w">
            <ul className="flex flex-row flex-wrap lg:flex-nowrap justify-between gap-5 mx-auto px-8">
              {[
                {
                  step: "1. Оформите заявку",
                  description: "На нашем сайте",
                },
                {
                  step: "2. Соберите документы",
                  description: "Предоставьте все необходимые бумаги",
                },
                {
                  step: "3. Оплатите комиссию",
                  description: "За получение банковской гарантии",
                },
                {
                  step: "4. Получите гарантию",
                  description: "В электронном виде",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-between text-2xl text-blue font-semibold mt-4 w-[47%] lg:w-1/4 pb-6"
                >
                  <span>{item.step}</span>
                  <p className="text-base text-xl mt-4 text-light-blue font-normal">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </section>

      <section ref={blocks.calculator}></section>
      <Calculator />
      <section className="px-7">
        <div className="flex items-center p-5 px-7 bg-blue w-56 rounded-[50px] mt-40">
          <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
          <span className="text-3xl font-extrabold text-white ml-1 ">
            Кто мы
          </span>
        </div>
        <div>
          <p className="text-blue text-xl font-semibold mt-8 ">
            Финансовая компания "Гарант-БГ" активно развивается, и наши
            специалисты регулярно повышают свою квалификацию. Мы более 10 лет
            работаем в финансовом секторе, сотрудничая с ведущими банками.
          </p>

          <p className="text-blue text-xl font-semibold mt-4">
            Мы предлагаем широкий спектр услуг, которые помогут вам в бизнесе.
            Независимо от того, нужна ли вам гарантия для участия в закупках,
            исполнения контрактов или другие виды гарантий, мы поможем вам
            получить нужные документы в кратчайшие сроки.
          </p>

          <p className="text-blue text-xl font-semibold mt-4">
            Даже если вам отказали в другом месте, наши специалисты найдут
            оптимальное решение для вашей ситуации.
          </p>
        </div>

        <div className="flex items-center float-right p-5 px-7 bg-blue rounded-[50px] mt-40">
          <div className="w-5 h-5 bg-light-blue rounded-full mr-2 "></div>
          <span className="text-3xl font-extrabold text-white ml-1 ">
            Почему выбирают нас
          </span>
        </div>

        <ul className="flex flex-row flex-wrap md:flex-nowrap gap-5 mt-72 w-full">
          <li className="bg-white lg:min-h-80 h-full w-full lg:w-1/3 p-8 rounded-[50px] shadow-w">
            <p className="text-blue text-2xl leading-7  font-medium ">
              Только легальные банковские гарантии от банков, аккредитованных
              МинФином РФ. Наши гарантии проходят все проверки.{" "}
            </p>
          </li>

          <li className="bg-white lg:min-h-80 h-full w-full lg:w-1/3 p-8  rounded-[50px] shadow-w">
            <p className="text-blue text-2xl leading-7 font-medium">
              Мы работаем с компаниями всех форм собственности: ИП, ООО, АО,
              ЗАО.
            </p>
          </li>

          <li className="bg-white lg:min-h-80 h-full w-full lg:w-1/3 p-8  rounded-[50px] shadow-w">
            <p className="text-blue text-2xl leading-7 font-medium">
              Помогает получить гарантию без необходимости залога или
              поручительства.
            </p>
          </li>
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
