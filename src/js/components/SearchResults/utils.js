import {
  generateMovieCardHTML,
  generateMoviesHTML,
} from "../../utils/generateMoviesHTML.js";

function setResults(state, results) {
  return { ...state, results };
}

function generateErrorHTML(err) {
  return `
  <div class="search-error" id="search-error">
        <p class="search-error__msg">${err.message}</p>
    </div>`;
}

function generateSearchResultsHTML(movies, watchlist) {
  return generateMoviesHTML(function () {
    return movies
      .map((movie) => {
        const isInWatchlist =
          watchlist.find((m) => m.imdbID === movie.imdbID) != undefined;

        return `<li class="movie-list__item">
        ${generateMovieCardHTML(movie, "search-results", isInWatchlist)}
  </li>`;
      })
      .join("\n");
  }, "movies-list--search-results");
}

export { setResults, generateErrorHTML, generateSearchResultsHTML };
