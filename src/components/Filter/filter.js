import React from "react";
import "./filter.css";

function filter() {
  function inputChange(e) {}
  return (
    <form className="filter">
      <div className="filter__box">
        <input
          onChange={inputChange}
          className="filter__input"
          value="Фильм"
          type="text"
          name="filter"
          id="filter"
          minLength="2"
          required
        ></input>
        <button
          className="filter__button"
          title="Иконка лупы"
          type="submit"
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
  );
}

export default filter;
