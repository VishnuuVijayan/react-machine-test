import React from "react";

export default function MovieCard({ data }) {
  const [image, setImage] = React.useState(null);

  //TODO Fix Exhaustive Deps here
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadImage = () => {
    try {
      const src = require(`../assets/posters/${data["poster-image"]}`);
      setImage(src);
    } catch (error) {
      setImage(require("../assets/posters/placeholder.png"));
    }
  };
  React.useEffect(() => {
    loadImage();
  }, [data, loadImage]);

  return (
    <div className="mx-[15px] mb-[90px]">
      <img
        alt="film-poster"
        className="w-full sm:h-[150px] md:h-[200px] lg:h-[300px]"
        src={image}
      />
      <p className="text-white mt-1 font-light text-[20px] text-left">
        {data["name"]}
      </p>
    </div>
  );
}
