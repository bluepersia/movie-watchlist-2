import {
  generateMovieCardHTML,
  generateMoviesHTML,
} from "../../utils/generateMoviesHTML.js";

function generateWatchlistHTML(movies) {
  return generateMoviesHTML(function () {
    return movies.map((movie) => {
      return `<li class="movie-list__item"> 
          ${generateMovieCardHTML(movie, "watchlist", true)}
        </li>`;
    });
  });
}

export { generateWatchlistHTML };
