import { API_KEY, BASE_URL } from "./consts.js";

function generateEndpointURL(query) {
  return `${BASE_URL}?apikey=${API_KEY}&${query}`;
}

export { generateEndpointURL };
