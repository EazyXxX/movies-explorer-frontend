import { BaseApi } from "./BaseApi";
import { MOVIES_API } from "../constants/Api";

export class MoviesApi extends BaseApi {
  getMovies() {
    return super._request(`${this._baseUrl}`, {
      method: "GET",
      headers: this._headers,
    });
  }
}

const filmsApi = new MoviesApi({
  baseUrl: MOVIES_API,
  headers: {
    "Content-Type": "application/json",
  },
});
export { filmsApi };
