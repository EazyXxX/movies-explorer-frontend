import { BaseApi } from "./BaseApi";
import { MOVIES_API } from "../components/constants/Api";

export class MoviesApi extends BaseApi {
  getMovies() {
    return super._request(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    });
  }
}

const filmsApi = new MoviesApi({
  url: MOVIES_API,
  headers: {
    "Content-Type": "application/json",
  },
});
export { filmsApi };
