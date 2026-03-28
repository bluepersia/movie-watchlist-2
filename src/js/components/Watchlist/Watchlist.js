import generateWatchlistHTML from "../../utils/generateWatchlistHTML.js";

export default function Watchlist(root, watchlistContext) {
  renderWatchlist();

  function renderWatchlist() {
    if (watchlistContext.getWatchlist().length <= 0) {
      root.outerHTML = `<div class="empty-watchlist" id="empty-watchlist">
        <p class="empty-watchlist__text">
          Your watchlist is looking a little empty...
        </p>
        <a href="./index.html" class="empty-watchlist__link"
          ><img
            src="./img/add-icon.png"
            alt=""
            class="empty-watchlist__add-icon"
          />Let's add some movies!</a
        >
      </div>`;

      return;
    }

    root.outerHTML = generateWatchlistHTML(watchlistContext.getWatchlist());

    root = document.getElementById("movie-list");
    root.addEventListener("click", handleClick);
  }

  function handleClick(e) {
    if (e.target.dataset.remove) {
      watchlistContext.removeFromWatchlist(
        watchlistContext
          .getWatchlist()
          .find((m) => m.imdbID === e.target.dataset.remove)
      );
      renderWatchlist();
    }
  }
}
