import "./App.css";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from "./actions/listingActions";

function App() {
  const listings = useSelector((store) => store.listings);
  const [search, setSearch] = React.useState("");
  const pageNumber = useSelector((store) => store.pageNumber);
  const searchedResults = useSelector((store) => store.searchedResults);
  const allLoaded = useSelector((store) => store.listings.allLoaded);
  const dispatch = useDispatch();
  const innerRef = React.useRef();

  const isBottom = () => {
    return (
      innerRef.current.getBoundingClientRect().bottom <= window.innerHeight
    );
  };

  const trackScrolling = React.useCallback(() => {
    const el = document.getElementById("listing-container");
    if (isBottom(el) && !allLoaded) {
      fetchListings(pageNumber)(dispatch);
    }
  }, [allLoaded, pageNumber, dispatch]);

  React.useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [trackScrolling, allLoaded, dispatch]);

  const mappableArray = () => {
    if (search === "") {
      return listings;
    } else {
      return searchedResults;
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar search={search} setSearch={setSearch} genre="Romantic Comedy" />
      {mappableArray().map((item, index) => (
        <React.Fragment key={item.title + index.toString()}>
          {item["content-items"].content.length > 0 && (
            <>
              <div
                ref={innerRef}
                id="list-items"
                className={`grid p-15 grid-cols-3 px-[15px] md:grid-cols-6 ${
                  item["content-items"].content.length !== 0 && "min-h-screen"
                }`}
              >
                {item["content-items"].content.map((item, index) => (
                  <MovieCard
                    key={index + item["name"] + item["poster-image"]}
                    data={item}
                  />
                ))}
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
