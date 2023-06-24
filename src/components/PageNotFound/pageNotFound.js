import React from "react";
import "../PageNotFound/pageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="empty">
      <h1 className="empty__title">404</h1>
      <p className="empty__subtitle">Страница не найдена</p>
      <Link className="empty__button empty__link" to="/">
        Назад
      </Link>
    </main>
  );
}

export default PageNotFound;
