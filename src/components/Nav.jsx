import React from "react";
import { Link } from "react-router-dom";

export const NavItem = ({ to = "", text = "" }) => {
  return (
    <div className="lg:py-[18px] w-fit">
      <Link to={to} className="xl:text-[36px] lg:text-[17px]">
        {text}
      </Link>
    </div>
  );
};
