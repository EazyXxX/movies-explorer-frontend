import "./profile.css";
import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  function handleInput(e) {}
  return (
    <main className="profile">
      <section>
        <h1 className="profile__salute">Привет, Виталий!</h1>
        <form className="profile__form" name="profile">
          <div className="profile__box">
            <p className="profile__header">Имя</p>
            <label className="profile__label">
              <input
                onChange={handleInput}
                className="profile__input"
                type="text"
                id="name"
                name="name"
                minLength="2"
                required
                placeholder="Имя"
                value="Виталий"
                maxLength="20"
              ></input>
            </label>
          </div>
          <div className="profile__box">
            <p className="profile__header">E-mail</p>
            <label className="profile__label">
              <input
                onChange={handleInput}
                className="profile__input"
                type="email"
                id="email"
                name="email"
                minLength="2"
                required
                placeholder="E-mail"
                value="pochta@yandex.ru"
              ></input>
            </label>
          </div>
        </form>
        <div className="profile__link-box">
          <button className="profile__link" type="button">
            Редактировать
          </button>
          <Link className="profile__link profile__link_red" to="/">
            Выйти из аккаунта
          </Link>
          <span className="profile__error profile__hidden">
            При обновлении профиля возникла ошибка.
          </span>
          <button
            className="profile__button profile__hidden"
            type="submit"
            id="save"
          >
            Сохранить
          </button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
