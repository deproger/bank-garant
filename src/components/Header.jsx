import React, { useState } from "react";
import { Icon } from "./Icon"; // Ваш логотип или иконка
import { Icom } from "./Icom";
import { NavItem } from "./Nav"; // Компоненты для пунктов меню

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${
        isOpen
          ? "rounded-b-0 rounded-t-[20px] lg:rounded-full"
          : "rounded-[20px] lg:rounded-full"
      } flex justify-between items-center relative z-20 bg-blue left-0 top-3 mb-5 w-[95%] lg:w-[98%] pl-7 text-white mx-auto min-h-10`}
    >
      <Icon />

      {/* Иконка гамбургера для мобильных устройств */}
      <div className="lg:hidden flex align-center">
        <button onClick={toggleMenu} className="my-auto mr-2">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Навигация */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-col lg:flex-row gap-5 items-center pb-2 pt-5 lg:py-0 rounded-b-[20px] rounded-t-0 absolute top-full left-0 w-full lg:static lg:flex lg:items-center lg:w-auto lg:gap-5 bg-blue lg:bg-transparent text-white lg:rounded-none lg:block`}
      >
        <NavItem to="/offers" text="Предложения" />
        <NavItem to="/calculator" text="Калькулятор" />
        <NavItem to="/articles" text="Статьи" />
        <Icom text="Консультация" />
      </nav>
    </header>
  );
};
