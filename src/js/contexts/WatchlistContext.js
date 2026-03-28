import { addMovie, removeMovie } from "./utils.js";

export default function WatchlistContext() {
  let state = {
    watchlist: JSON.parse(localStorage.getItem("watchlist")) || [],
  };

  function addToWatchlist(movie) {
    state = addMovie(state, movie);

    saveToLocalStorage();
  }

  function removeFromWatchlist(movie) {
    state = removeMovie(state, movie);

    saveToLocalStorage();
  }

  function saveToLocalStorage() {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }

  function getWatchlist() {
    return state.watchlist;
  }

  return {
    getWatchlist,
    addToWatchlist,
    removeFromWatchlist,
  };
}
