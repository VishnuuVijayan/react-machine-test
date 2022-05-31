import "./App.css";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
// import { data } from "./data";
import React from "react";
// import firstData from "./data/CONTENTLISTINGPAGE-PAGE1.json";
// import secondData from "./data/CONTENTLISTINGPAGE-PAGE2.json";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from "./actions/listingActions";

function App() {
  const listings = useSelector((store) => store.listings);
  console.log("Listings:", listings);
  const pageNumber = useSelector((store) => store.pageNumber);
  // const loading = useSelector((store) => store.listings.loading);
  const allLoaded = useSelector((store) => store.listings.allLoaded);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("Listings Changed:", listings);
  }, [listings]);

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!allLoaded) fetchListings(pageNumber)(dispatch);
    }
  };

  return (
    <div className="App bg-black">
      {listings.map((item, index) => (
        <React.Fragment key={item.page.title + index.toString()}>
          <Navbar genre={item.page.title} />
          <div
            id="list-items"
            className="grid p-15 grid-cols-3 px-[15px] md:grid-cols-6"
          >
            {item.page["content-items"].content.map((item, index) => (
              <MovieCard
                key={index + item["name"] + item["poster-image"]}
                data={item}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
