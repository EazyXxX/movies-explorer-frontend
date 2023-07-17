import React from "react";
import "../Filter/filter.css";

function FilterCheckbox({ isChecked, handleCheckbox }) {
  return (
    <div className="filter__switch-container">
      <div className="filter__switch-box">
        <p className="filter__moniker">Короткометражки</p>
        <label className="filter__switch">
          <input
            className="filter__checkbox-input"
            type="checkbox"
            сhecked={isChecked.toString()}
            onChange={handleCheckbox}
          />
          <span className="filter__slider"></span>
        </label>
      </div>
    </div>
  );
}

export default FilterCheckbox;
