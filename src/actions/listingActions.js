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

export const searchListings = (text) => {
  return {
    type: "SEARCH_LISTINGS",
    text,
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
  return (dispatch) => {
    dispatch(loadingListings());
    let newPage;
    try {
      newPage = require(`../data/CONTENTLISTINGPAGE-PAGE${
        Number(pageNumber) + 1
      }.json`);
      dispatch(addListings(newPage.page));
    } catch (err) {
      console.log("Error:", err);
    }
  };
};

export const triggerSearch = (text) => {
  return (dispatch) => {
    dispatch(loadingListings());
    dispatch(searchListings(text));
  };
};
