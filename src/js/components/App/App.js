import WatchlistContext from "../../contexts/WatchlistContext.js";
import Search from "../Search/Search.js";
import SearchResults from "../SearchResults/SearchResults.js";
import { setSearchResults as setResults } from "./utils.js";

export default function App() {
  let state = {
    searchResults: [],
  };

  const searchResultsChanged = [];

  const watchlistContext = WatchlistContext();

  Search(document.getElementById("search"), setSearchResults);
  SearchResults(
    document.getElementById("no-results"),
    searchResultsChanged,
    watchlistContext
  );

  function setSearchResults(results) {
    state = setResults(state, results);

    searchResultsChanged.forEach((el) => el(results));
  }
}
