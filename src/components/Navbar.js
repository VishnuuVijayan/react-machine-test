import React from "react";
import { useDispatch } from "react-redux";
import { triggerSearch } from "../actions/listingActions";

export default function Navbar({ genre, search, setSearch }) {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="relative w-full bg-[url('./assets/header/nav_bar.png')] bg-cover h-[156px] mb-9">
        <div className="absolute w-full bottom-0 flex justify-between">
          <div className="flex">
            <img
              src={require("../assets/header/Back.png")}
              className="w-[15px] h-[15px] md:h-[100px] md:w-[100px] mr-3 md:mr-10 ml-[30px] object-contain"
              alt="back-icon"
            />
            <p className="text-xs  md:text-3xl text-white">{genre}</p>
          </div>
          {!input ? (
            <img
              onClick={() => {
                setInput(true);
              }}
              src={require("../assets/header/search.png")}
              className="w-[20px] px-1 h-[20px] md:h-[100px] md:w-[100px] mr-[30px] object-contain max-w-[30%]"
              alt="back-icon"
            />
          ) : (
            <input
              onBlur={() => {
                setInput(false);
              }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                triggerSearch(e.target.value)(dispatch);
              }}
              autoFocus
              type="text"
              className="bg-[#1A1928] text-white max-w-[120px] mr-5  py-2 px-2 rounded-xl"
            />
          )}
        </div>
      </div>
    </header>
  );
}
