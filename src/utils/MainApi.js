import { BaseApi } from "./BaseApi";
import { MAIN_API, MOVIES_API } from "../constants/Api";

class MainApi extends BaseApi {
  register(name, email, password) {
    return super._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  }

  authorize(email, password) {
    return super._request(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  signOut() {
    return super._request(`${this._baseUrl}/signout`, {
      method: "POST",
      credentials: "include",
    });
  }

  checkToken() {
    console.log(this._headers)
    return super._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    });
  }

  getUserInfo() {
    return super._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    });
  }

  patchUserInfo(email, name) {
    return super._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        email,
        name,
      }),
    });
  }

  getSavedMovies() {
    return super._request(`${this._baseUrl}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    });
  }

  createMovie(data) {
    const image = MOVIES_API + data.image.url;
    const thumbnail = MOVIES_API + data.image.formats.thumbnail.url;
    const movieId = data.id;
    const {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
    } = data;
    return super._request(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        nameRU,
        nameEN,
        movieId,
      }),
    });
  }

  deleteMovie(id) {
    return super._request(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    });
  }
}

const authApi = new MainApi({
  baseUrl: MAIN_API,
  headers: {
    "Content-Type": "application/json",
  },
});
export { authApi };
