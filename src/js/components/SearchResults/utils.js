function setResults(state, results) {
  return { ...state, results };
}

function generateErrorHTML(err) {
  return `
  <div class="search-error">
        <p class="search-error__msg">${err.message}</p>
    </div>`;
}

export { setResults, generateErrorHTML };
