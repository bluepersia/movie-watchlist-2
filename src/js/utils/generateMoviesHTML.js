export default function generateMoviesHTML(movies, watchlist) {
  return `<ul class="movie-list movie-list--results container" id="movie-list">
  ${movies
    .map((movie) => {
      const isInWatchlist = watchlist.find((m) => m.imdbID === movie.imdbID);
      return `<li class="movie-list__item">
    <article class="movie-card">
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
            />Watchlist
          </button>
        </div>
        <p class="movie-card__desc">
          A blade runner must pursue and terminate four replicants who stole a
          ship in space, and have returned to Earth to find their creator.
        </p>
      </div>
    </article>
  </li>
</ul>`;
    })
    .join("\n")}`;
}
