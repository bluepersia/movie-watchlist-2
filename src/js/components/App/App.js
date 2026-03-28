import Search from "../Search/Search.js";
import { setSearchResults as setResults } from "./utils.js";

export default function App() {
  let state = {
    searchResults: [],
  };

  const searchResultsChanged = [];

  Search(document.getElementById("search"), setSearchResults);

  function setSearchResults(results) {
    state = setResults(state, results);

    searchResultsChanged.forEach((el) => el(results));
  }
}
