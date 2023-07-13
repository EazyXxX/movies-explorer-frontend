import "./profile.css";
import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  messageOk,
  signOut,
  resetError,
  errorUpdateUser,
  handleUpdateUser,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditProfile, setIsEditProfile] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
  });
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [form, setForm] = useState("");

  function editProfile() {
    setIsValid(false);
    setIsEditProfile(false);
  }

  useEffect(() => {
    if (!errorUpdateUser) {
      setIsEditProfile(true);
    }
  }, [currentUser]);

  function checkFieldsDiversity() {
    const arr = {
      name: currentUser.name,
      email: currentUser.email,
    };
    return JSON.stringify(arr) === JSON.stringify(formData);
  }

  function handleInput(e) {
    resetError();
    const { name, value, validationMessage } = e.target;
    setForm(e.target.form);
    setFormData({ ...formData, [name]: value });
    setErrorMessage({ ...errorMessage, [name]: validationMessage });
  }

  useEffect(() => {
    if (form && !checkFieldsDiversity()) {
      setIsValid(form.checkValidity());
    } else {
      setIsValid(false);
    }
  }, [formData, form]);

  function onSubmit(e) {
    e.preventDefault();
    handleUpdateUser({
      name: formData.name,
      email: formData.email,
    });
  }

  return (
    <main className="profile">
      <section>
        <h1 className="profile__salute">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile__form" name="profile" onSubmit={onSubmit}>
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
                value={formData.name}
                maxLength="20"
                disabled={isEditProfile}
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
                value={formData.email}
                disabled={isEditProfile}
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
          <span className="profile__error profile__error_positive">
            {messageOk}
          </span>
          <span className="profile__error">
            {errorMessage.name || errorMessage.email || errorUpdateUser}
          </span>
          {isEditProfile ? (
            <span className="profile__button" onClick={editProfile}>
              Редактировать
            </span>
          ) : (
            <button
              className={`profile__button ${
                !isValid && errorUpdateUser
                  ? "profile__hidden animation__button"
                  : ""
              }`}
              type="submit"
              id="save"
            >
              Сохранить
            </button>
          )}
        </div>
        {isEditProfile ? (
          <span className="profile__button" onClick={signOut}>
            Выйти из аккаунта
          </span>
        ) : (
          ""
        )}
      </section>
    </main>
  );
}

export default Profile;
