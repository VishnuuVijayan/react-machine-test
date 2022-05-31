import initalData from "../data/CONTENTLISTINGPAGE-PAGE1.json";
export default function listingReducer(
  state = {
    pageNumber: 1,
    allLoaded: false,
    loading: false,
    listings: [initalData],
  },
  action
) {
  switch (action.type) {
    case "LOADING_LISTINGS":
      return { ...state, loading: true };

    case "ADD_LISTINGS":
      return {
        ...state,
        pageNumber: action.listings.page["page-num-requested"],
        listings: [...state.listings, action.listings],
        allLoaded: action.listings.length < 54 ? true : false,
        loading: false,
      };

    case "RESET_ALL_LOADED":
      return { ...state, allLoaded: false };

    default:
      return state;
  }
}
