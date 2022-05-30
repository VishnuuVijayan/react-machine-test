import React from "react";

export default function MovieCard({ data }) {
  return (
    <div className="mx-[15px] mb-[90px]">
      <img
        alt="film-poster"
        className="w-full sm:h-[150px] md:h-[200px] lg:h-[300px]"
        src={require(`../assets/posters/${data["poster-image"]}`)}
      />
      <p className="text-white mt-1 font-light text-[20px] text-left">
        {data["name"]}
      </p>
    </div>
  );
}
