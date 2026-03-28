function setSearchResults(state, results) {
  return {
    ...state,
    searchResults: results,
  };
}

function setError(state, err) {
  return { ...state, searchErr: err };
}

export { setSearchResults, setError };
