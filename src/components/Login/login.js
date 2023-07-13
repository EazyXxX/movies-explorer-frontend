import "../Form/form.css";
import { React, useState } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login({ onLogin, errorAuthorization, resetError }) {

  const [errorMessage, setErrorMessage] = useState({ 
    email: '',
    password: ''
  });

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isValid, setIsValid] = useState(false);

  function handleInput(e) {
    resetError();
    const { name, value, validationMessage, form } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage({ ...errorMessage, [name]: validationMessage });
    setIsValid(form.checkValidity());
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onLogin({
      email: formData.email,
      password: formData.password
    });
  }

  return (
    <main className="form">
      <section>
        <Link className="form__logo-link" to={"/"}>
          <img
            className="form__logo"
            alt="Логотип - зелёная улыбающаяся минималистичная рожица"
            src={logo}
          />
        </Link>
        <h1 className="form__salute">Рады видеть!</h1>
        <form className="form__form" name="login" onSubmit={handleFormSubmit}>
          <ul className="form__label-container">
            <li>
              <p className="form__header">E-mail</p>
              <label className="form__label">
                <input
                  onChange={handleInput}
                  value={formData.email}
                  className="form__input"
                  id="email"
                  name="email"
                  type="email"
                  minLength="2"
                  required
                  placeholder="E-mail"
                />
                <span className="form__error">{errorMessage.email}</span>
              </label>
            </li>
            <li>
              <p className="form__header">Пароль</p>
              <label className="form__label">
                <input
                  onChange={handleInput}
                  value={formData.password}
                  className="form__input"
                  id="password"
                  name="password"
                  type="password"
                  minLength="2"
                  maxLength="30"
                  required
                  placeholder="Пароль"
                />
                <span className="form__error">{errorMessage.password}</span>
              </label>
            </li>
          </ul>
          <div className="form__margin" />
          <span className="form__error">{errorAuthorization}</span>
          <button
            className={`form__button ${!isValid || errorAuthorization ? 'form__button_disabled' : ''}`}
            type="submit"
            aria-label="Кнопка войти"
            disabled={!isValid || errorAuthorization}
          >
            Войти
          </button>
          <h2 className="form__span">
            Ещё не зарегистрированы?
            <Link className="form__link" to="/signup">
              {" "}
              Регистрация
            </Link>
          </h2>
        </form>
      </section>
    </main>
  );
}

export default Login;
