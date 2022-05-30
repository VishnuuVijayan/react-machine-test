import React from "react";

export default function Navbar({ genre }) {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative w-full bg-[url('./assets/header/nav_bar.png')] bg-cover h-[156px] mb-9">
        <div className="absolute w-full bottom-0 flex justify-between">
          <div className="flex items-center">
            <img
              src={require("../assets/header/Back.png")}
              className="w-[20px] h-[20px] md:h-[100px] md:w-[100px] mr-2 md:mr-10  ml-10 object-contain"
              alt="back-icon"
            />
            <p className="text-sm md:text-3xl text-white">{genre}</p>
          </div>
          <img
            src={require("../assets/header/search.png")}
            className="w-[20px] h-[20px] md:h-[100px] md:w-[100px] mr-10 object-contain"
            alt="back-icon"
          />
        </div>
      </div>
    </header>
  );
}
