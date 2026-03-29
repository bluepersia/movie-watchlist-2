function generateMoviesHTML(children, extraClass) {
  return `<ul class="movie-list ${extraClass} container" id="movie-list">
    ${children()}
  </ul>`;
}

function generateMovieCardHTML(
  movie,
  variant = "search-results",
  isInWatchlist = true
) {
  const buttonText = variant === "search-results" ? "Watchlist" : "Remove";
  return `<article class="movie-card">
  <img
    src="${movie.Poster}"
    alt="${movie.Title} poster"
    class="movie-card__img"
  />
  <div class="movie-card__content">
    <div class="movie-card__top">
      <h3 class="movie-card__title">${movie.Title}</h3>
      <p class="movie-card__rating">
        <img
          src="./img/star.png"
          alt="Rating"
          class="movie-card__rating-icon"
        /><span class="movie-card__rating-num">${movie.imdbRating}</span>
      </p>
    </div>
    <div class="movie-card__center">
      <p class="movie-card__time">${movie.Runtime}</p>
      <p class="movie-card__genres">${movie.Genre}</p>
      <button
        class="movie-card__watchlist-btn"
        aria-label="${isInWatchlist ? "Remove from" : "Add to"} watchlist"
        data-${isInWatchlist ? "remove" : "add"}="${movie.imdbID}"
      >
        <img
          src="./img/${isInWatchlist ? "remove" : "add"}-icon.png"
          alt=""
          class="movie-card__watchlist-icon"
        />${buttonText}
      </button>
    </div>
    <p class="movie-card__desc">
      A blade runner must pursue and terminate four replicants who stole a
      ship in space, and have returned to Earth to find their creator.
    </p>
  </div>
</article>`;
}

export { generateMoviesHTML, generateMovieCardHTML };
