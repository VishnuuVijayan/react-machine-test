export const addListings = (listings) => {
  return {
    type: "ADD_LISTINGS",
    listings,
  };
};

export const showListing = (listing) => {
  return {
    type: "SHOW_LISTING",
    listing,
  };
};

export const loadingListings = () => {
  return {
    type: "LOADING_LISTINGS",
  };
};

export const resetAllLoaded = () => {
  return {
    type: "RESET_ALL_LOADED",
  };
};

export const fetchListings = (pageNumber) => {
  console.log("Fetching...");
  return (dispatch) => {
    dispatch(loadingListings());
    const newPage = require(`../data/CONTENTLISTINGPAGE-PAGE${
      Number(pageNumber) + 1
    }.json`);
    console.log("Page NUm:", newPage.page["page-num-requested"]);
    dispatch(addListings(newPage));
  };
};
