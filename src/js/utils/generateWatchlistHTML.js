export default function generateWatchlistHTML(movies) {
  return `<ul class="movie-list movie-list--results container" id="movie-list">
    ${movies
      .map((movie) => {
        return `<li class="movie-list__item">
      <article class="movie-card movie-card--watchlist">
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
              aria-label="Remove from watchlist"
              data-remove="${movie.imdbID}"
            >
              <img
                src="./img/remove-icon.png"
                alt=""
                class="movie-card__watchlist-icon"
              />Remove
            </button>
          </div>
          <p class="movie-card__desc">
            A blade runner must pursue and terminate four replicants who stole a
            ship in space, and have returned to Earth to find their creator.
          </p>
        </div>
      </article>
    </li>`;
      })
      .join("\n")}
  </ul>`;
}
