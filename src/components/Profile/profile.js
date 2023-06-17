import "./profile.css";
import React from "react";
import Header from "../Header/header";
import "../Animation/animation.css";
import {Link} from 'react-router-dom'

function Profile() {
  return (
    <>
      <Header />
      <h1 className="profile__salute">Привет, Виталий!</h1>;
      <form className="profile__form">
        <div className="profile__box">
          <label className="profile__label">
            <h3 className="profile__header">Имя</h3>
            <input
              className="profile__input"
              type="text"
              id="name"
              name="name"
              minLength="2"
              required
              placeholder="Имя"
              value="Виталий"
            ></input>
          </label>
        </div>
        <div className="profile__box">
          <label className="profile__label">
            <h3 className="profile__header">E-mail</h3>
            <input
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
        <Link className="profile__link animation__link">Редактировать</Link>
        <Link className="profile__link animation__link">Выйти из аккаунта</Link>
      </div>
    </>
  );
}

export default Profile;
