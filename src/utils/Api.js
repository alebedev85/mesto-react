class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  _getHeaders() {
    return {
      authorization: this._token,
      "Content-Type": 'application/json'
    };
  }

  _getJson(res) {
    if (res.ok) {
      return res.json()
    } else Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._getJson);
  }

  getCurrentUser() {
    return this._request(`${this._url}/users/me`, {
      headers: this._getHeaders()
    });
  }

  setUserInfo(name, about) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        about: about
      })
    });
  }

  getCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._getHeaders()
    });
  }

  addNewCard(item) {
    return this._request(`${this._url}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify(item)
    });
  }

  deleteCard(id) {
    return this._request(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders()
    });
  }

  addLike(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._getHeaders()
    });
  }

  deleteLike(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._getHeaders()
    });
  }

  setNewAvatar(input) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify(input)
    });
  }
}

export const api = new Api('https://mesto.nomoreparties.co/v1/cohort-61', '3e070c18-b10f-4e80-b715-68fa3cc00268');
