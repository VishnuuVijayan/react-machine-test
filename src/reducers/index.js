import initalData from "../data/CONTENTLISTINGPAGE-PAGE1.json";
export default function listingReducer(
  state = {
    pageNumber: 1,
    allLoaded: false,
    loading: false,
    listings: [initalData.page],
    searchedResults: [initalData.page],
  },
  action
) {
  switch (action.type) {
    case "LOADING_LISTINGS":
      return { ...state, loading: true };
    case "ADD_LISTINGS":
      return {
        ...state,
        pageNumber: action.listings["page-num-requested"],
        listings: [...state.listings, action.listings],
        allLoaded: false,
        loading: false,
      };
    case "RESET_ALL_LOADED":
      return { ...state, allLoaded: false };
    case "SEARCH_LISTINGS":
      return {
        ...state,
        searchedResults: state.listings.map((listing) => {
          return {
            ...listing,
            // eslint-disable-next-line no-useless-computed-key
            ["content-items"]: {
              content: listing["content-items"].content.filter((movie) => {
                const regExp = new RegExp(action.text, "gi");
                return movie.name.search(regExp) !== -1;
              }),
            },
          };
        }),
      };

    default:
      return state;
  }
}
