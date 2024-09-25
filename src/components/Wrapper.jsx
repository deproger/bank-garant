import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div className="container max-w-[1600px] mx-auto sm:py-5 sm:px-7 p-1 sm:pb-0 xl:max-w-screen min-h-screen 2xl:min-w-screen xl:px-0 ">
      {children}{" "}
    </div>
  );
};
