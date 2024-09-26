import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
// Lazy load YMaps
const LazyYMaps = lazy(() =>
  import("@pbe/react-yandex-maps").then((module) => ({
    default: module.YMaps,
  }))
);
const LazyMap = lazy(() =>
  import("@pbe/react-yandex-maps").then((module) => ({
    default: module.Map,
  }))
);
const LazyPlacemark = lazy(() =>
  import("@pbe/react-yandex-maps").then((module) => ({
    default: module.Placemark,
  }))
);
export const Footer = () => {
  return (
    <>
      <footer className="bg-light-blue h-auto w-full rounded-t-3xl mt-28 flex flex-row flex-wrap items-center justify-between px-5">
        <div className="lg:ml-10 mb-4">
          <div className="">
            <a href="mailto:info@garant-bg.ru ">
              <p className=" text-white font-bold mb-1 py-10">
                info@garant-bg.ru
              </p>
            </a>
            <div></div>
            <a href="tel:8(800)6004592">
              <p className="text-white font-bold text-4xl py-[-3rem]">
                {" "}
                8 (800) 600 45 92
              </p>
            </a>
          </div>
          <p className="text-blue mt-[-5px]">Звонок по России бесплатный</p>
          <p className="text-blue mt-4">ежедневно 10:00-19:00</p>
          <p className="text-white mt-[-5px]">
            123242,г.Москва, ул.Садовая-Кудринская, д. 11, стр. 1, офис 101
          </p>
        </div>

        <div className="">
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-white text-2xl  leading-10 font-medium items-center"
            >
              Главная
            </Link>
            <Link
              to="/calculator"
              className="text-white text-2xl leading-10 font-medium"
            >
              Калькулятор БГ
            </Link>
          </div>
          <div className="links flex space-x-3 mt-4 2xl:ml-3 justify-center">
            <a href="https://api.whatsapp.com/send?phone=79035129685">
              <img src="/img/wa.png" alt="Whatsapp" />
            </a>
            <a href="https://instagram.com/garant_bg?utm_medium=copy_link">
              <img src="/img/inst.png" alt="Inst" />
            </a>
            <a href="https://www.facebook.com/BGgarant/">
              <img src="/img/fb.png" alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="my-10">
          {/* Suspense to handle lazy-loaded components */}
          <Suspense fallback={<div className="text-white">Loading map...</div>}>
            <LazyYMaps>
              <LazyMap
                defaultState={{ center: [55.763255, 37.586652], zoom: 15 }}
                style={{ width: "100vw", maxWidth: "340px", height: "270px" }}
              >
                <LazyPlacemark geometry={[55.763255, 37.586652]} />
              </LazyMap>
            </LazyYMaps>
          </Suspense>
        </div>

        {/* <div className="border-[0.5px] mr-24 mt-16 border-blue"></div> */}
      </footer>
      {/* <div className="flex text-xs justify-between  mr-24 py-10">
        <p className="text-blue">2024 garant-bg </p>
        <p className="text-blue mb-4 ">Разработка сайта</p>
      </div> */}
    </>
  );
};
