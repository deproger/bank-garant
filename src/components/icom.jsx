import React from "react";
import { Link } from "react-router-dom";
export const Icom = ({ text = "" }) => {
  return (
    <div className="flex items-center h-[40px] lg:h-[62px] w-fit bg-light-blue rounded-[20px]">
      <Link
        to="/consultation"
        className="xl:text-[36px] lg:text-[17px] px-5 text-white w-fit flex items-center"
      >
        {text}
      </Link>
    </div>
  );
};
