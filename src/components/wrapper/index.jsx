import React from "react";


export const Wrapper = ({ children }) => {
    return (
        <div className="container mx-auto py-5 px-7 xl:max-w-screen min-h-screen 2xl:min-w-screen xl:px-0 ">{ children }  </div>
        
    )
}