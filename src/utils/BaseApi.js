export class BaseApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.json().then((result) => {
      if (res.ok) {
        return result;
      } else if (result.message) {
        return Promise.reject(`Ошибка: ${result.message}`);
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }
}
