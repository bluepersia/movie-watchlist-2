import { generateEndpointURL } from "./utils.js";

export default function Search(root, setSearchResults, setSearchError) {
  const formEl = root.querySelector("[data-form]");

  formEl.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const movieTitle = formData.get("movie-title");

    searchFor(movieTitle);
  }

  function searchFor(movieTitle) {
    fetch(generateEndpointURL(`s=${movieTitle}`))
      .then((res) => res.json())
      .then(async (data) => {
        if (!data.Search) {
          throw Error(
            "Unable to find what you're looking for. Please try another search"
          );
        }
        const responses = await Promise.all(
          data.Search.map((movie) =>
            fetch(generateEndpointURL(`i=${movie.imdbID}`))
          )
        );
        const jsons = await Promise.all(
          responses.map((movieRes) => movieRes.json())
        );

        setSearchResults(jsons);
      })
      .catch((err) => {
        setSearchError(err);
      });
  }
}
