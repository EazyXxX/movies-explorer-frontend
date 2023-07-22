import { React, useState } from "react";
import logo from "../../images/logo.svg";
import "../Form/form.css";
import { Link } from "react-router-dom";

function Register({ errorCreateUser, resetError, onCreateUser }) {
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState(false);

  function handleInput(e) {
    resetError();
    const { name, value, validationMessage, form } = e.target;
    const passwordInput = document.getElementById("password");
    setFormData({ ...formData, [name]: value });
    setErrorMessage({ ...errorMessage, [name]: validationMessage });
    setIsValid(form.checkValidity());
    if (passwordInput.checkValidity()) {
      passwordInput.classList.remove("form__input_password");
    } else {
      passwordInput.classList.add("form__input_password");
    }
  }
  

  function handleFormSubmit(e) {
    e.preventDefault();
    onCreateUser(formData);
  }

  return (
    <main className="form">
      <section>
        <Link className="form__logo-link" to="/">
          <img
            className="form__logo"
            alt="Логотип - зелёная минималистичная рожица"
            src={logo}
          />
        </Link>
        <h1 className="form__salute">Добро пожаловать!</h1>
        <form
          className="form__form"
          name="registration"
          onSubmit={handleFormSubmit}
        >
          <ul className="form__label-container">
            <li>
              <p className="form__header">Имя</p>
              <label className="form__label">
                <input
                  onChange={handleInput}
                  className="form__input"
                  id="name"
                  name="name"
                  type="text"
                  minLength="2"
                  maxLength="20"
                  required
                  value={formData.name}
                  placeholder="Имя"
                  pattern='[a-zA-Zа-яА-Я-\s]*'
                />
                <span className="form__error">{errorMessage.name}</span>
              </label>
            </li>

            <li>
              <p className="form__header">E-mail</p>
              <label className="form__label">
                <input
                  onChange={handleInput}
                  className="form__input"
                  id="email"
                  name="email"
                  type="email"
                  minLength="2"
                  required
                  value={formData.email}
                  placeholder="E-mail"
                  pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                />
                <span className="form__error">{errorMessage.email}</span>
              </label>
            </li>

            <li>
              <p className="form__header">Пароль</p>
              <label className="form__label">
                <input
                  onChange={handleInput}
                  className={`form__input`}
                  id="password"
                  name="password"
                  type="password"
                  minLength="2"
                  maxLength="30"
                  required
                  value={formData.password}
                  placeholder="Пароль"
                />
                <span className="form__error">{errorMessage.password}</span>
              </label>
            </li>
          </ul>
          <span className="form__error">{errorCreateUser}</span>
          <button
            className={`form__button ${
              !isValid || errorCreateUser ? "form__button_disabled" : ""
            }`}
            type="submit"
            aria-label="Кнопка сохранить"
            disabled={!isValid || errorCreateUser}
          >
            Зарегистрироваться
          </button>
          <h2 className="form__span">
            Уже зарегистрированы?
            <Link className="form__link" to="/signin">
              {" "}
              Войти
            </Link>
          </h2>
        </form>
      </section>
    </main>
  );
}

export default Register;
