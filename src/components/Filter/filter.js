import React from "react";
import "./filter.css";
import "../Animation/animation.css";

function filter() {
  return (
    <form className="filter">
      <div className="filter__box">
        <input
          className="filter__input"
          value="Фильм"
          type="text"
          name="filter"
          id="filter"
        ></input>
        <button
          className="filter__button animation__button"
          title="Иконка лупы"
        ></button>
      </div>
      <div className="filter__switch-container">
        <div className="filter__switch-box">
          <h3 className="filter__moniker">Короткометражки</h3>
          <label class="filter__switch">
            <input type="checkbox" />
            <span class="filter__slider"></span>
          </label>
        </div>
      </div>
    </form>
  );
}

export default filter;
