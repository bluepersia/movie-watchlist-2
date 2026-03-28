function addMovie(state, movie) {
  return {
    ...state,
    watchlist: [...state.watchlist, movie],
  };
}

function removeMovie(state, movie) {
  return {
    ...state,
    watchlist: state.watchlist.filter((m) => m.imdbID !== movie.imdbID),
  };
}

export { addMovie, removeMovie };
