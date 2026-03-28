import generateMoviesHTML from "../../utils/generateMoviesHTML.js";
import { setResults } from "./utils.js";

export default function SearchResults(
  root,
  searchResultsChanged,
  watchlistContext
) {
  let state = {
    results: [],
  };

  searchResultsChanged.push(render);

  function handleClick(e) {
    if (e.target.dataset.add) {
      watchlistContext.addToWatchlist(
        state.results.find((m) => m.imdbID === e.target.dataset.add)
      );
      render(state.results);
    } else if (e.target.dataset.remove) {
      watchlistContext.removeFromWatchlist(
        state.results.find((m) => m.imdbID === e.target.dataset.remove)
      );

      render(state.results);
    }
  }

  function render(movies) {
    state = setResults(state, movies);
    root.outerHTML = generateMoviesHTML(
      movies,
      watchlistContext.getWatchlist()
    );

    root = document.getElementById("movie-list");

    root.addEventListener("click", handleClick);
  }
}
