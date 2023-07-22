import React from "react";
import "../PageNotFound/pageNotFound.css";
import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="empty">
      <section>
        <h1 className="empty__title">404</h1>
        <p className="empty__subtitle">Страница не найдена</p>
        <Link className="empty__button empty__link" onClick={() => navigate(-1)}>
          Назад
        </Link>
      </section>
    </main>
  );
}

export default PageNotFound;
