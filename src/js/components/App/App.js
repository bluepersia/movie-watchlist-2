import WatchlistContext from "../../contexts/WatchlistContext.js";
import Search from "../Search/Search.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Watchlist from "../Watchlist/Watchlist.js";
import { setError, setSearchResults as setResults } from "./utils.js";

export default function App() {
  let state = {
    searchResults: [],
    searchErr: null,
  };

  const searchResultsChanged = [];
  const searchErrorChanged = [];

  const watchlistContext = WatchlistContext();

  if (window.location.pathname === "/index.html") {
    Search(document.getElementById("search"), setSearchResults, setSearchError);

    SearchResults(
      document.getElementById("no-results"),
      searchResultsChanged,
      searchErrorChanged,
      watchlistContext
    );
  } else if (window.location.pathname === "/watchlist.html") {
    Watchlist(document.getElementById("empty-watchlist"), watchlistContext);
  }

  function setSearchResults(results) {
    state = setResults(state, results);

    searchResultsChanged.forEach((el) => el(results));
  }

  function setSearchError(err) {
    state = setError(state, err);

    searchErrorChanged.forEach((el) => el(state.searchErr));
  }
}
