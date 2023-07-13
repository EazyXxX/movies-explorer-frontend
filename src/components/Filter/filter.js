import { React, useState } from "react";
import "./filter.css";

function Filter({ searchMovies, searchType }) {
  const [isValid, setIsValid] = useState(false);
  const [search, setSearch] = useState("");

  const filterSubmit = (e) => {
    if (e.target.value.length < 2) {
      return true;
    }
  };

  const handleSearch = (e) => {
    setIsValid(e.target.form.checkValidity());
    setSearch(e.target.value);
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem(searchType, search);
    searchMovies();
  }

  return (
    <section>
      <form className="filter" onSubmit={handleFormSubmit}>
        <div className="filter__box">
          <input
            className="filter__input"
            type="text"
            name="filter"
            id="filter"
            minLength="2"
            required
            onChange={handleSearch}
            pattern="[a-zA-Zа-яА-Я0-9-\s]*"
            noValidate
          ></input>
          <button
            className={`filter__button ${
              !isValid ? "filter__button_disabled" : ""
            }`}
            title="Иконка лупы"
            type="submit"
            onSubmit={filterSubmit}
            disabled={!isValid}
          ></button>
        </div>
        <div className="filter__switch-container">
          <div className="filter__switch-box">
            <p className="filter__moniker">Короткометражки</p>
            <label className="filter__switch">
              <input className="filter__checkbox-input" type="checkbox" />
              <span className="filter__slider"></span>
            </label>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Filter;
