import React from "react";
import "../PageNotFound/pageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="empty">
      <h1 className="empty__title">404</h1>
      <p className="empty__subtitle">Страница не найдена</p>
      <Link to="/">
        <button className="empty__button empty__link" type="button">Назад</button>
      </Link>
    </section>
  );
}

export default PageNotFound;
