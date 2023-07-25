import { React, useState, useEffect } from "react";
import "./filter.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Filter({
  searchMovies,
  loading,
  searchType,
  checkboxType,
  typeSearch,
  setFilteredSavedMovies,
}) {
  const [isValid, setIsValid] = useState(false);
  const [search, setSearch] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (typeSearch === "search") {
      const checked =
        JSON.parse(localStorage.getItem("checkboxState")) || false;
      const filterText = localStorage.getItem("searchQuery") || "";
      if (filterText) {
        setSearch(filterText);
        setIsChecked(checked);
      }
    } else if (typeSearch === "saveSearch") {
      setSearch("");
      setIsChecked(false);
      localStorage.removeItem("saveSearchQuery");
      localStorage.removeItem("saveCheckboxState");
      setFilteredSavedMovies([]);
    }
  }, []);

  useEffect(() => {
    if (typeSearch === "search") {
      if (localStorage.getItem("searchQuery")) {
        searchMovies();
      }
    } else if (typeSearch === "saveSearch") {
      if (
        localStorage.getItem("saveSearchQuery") ||
        JSON.parse(localStorage.getItem("saveCheckboxState"))
      ) {
        searchMovies();
      } else {
        setFilteredSavedMovies([]);
      }
      return;
    }
  }, [isChecked]);

  function handleCheckbox() {
    setIsChecked(!isChecked);
    localStorage.setItem(checkboxType, JSON.stringify(!isChecked));
  }

  function handleSearch(e) {
    setIsValid(e.target.form.checkValidity());
    setSearch(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem(searchType, search);
    searchMovies();
  }

  const filterSubmit = (e) => {
    if (e.target.value.length < 2) {
      return true;
    }
  };

  return (
    <section>
      <form className="filter" onSubmit={handleFormSubmit} noValidate>
        <div className="filter__box">
          <input
            className="filter__input"
            type="text"
            name="filter"
            id="filter"
            minLength="1"
            required
            onChange={handleSearch}
            pattern="[a-zA-Zа-яА-Я0-9-\s]*"
            noValidate
            value={search}
          ></input>
          <button
            className={`filter__button ${
              loading ? "filter__button_disabled" : ""
            }`}
            title="Иконка лупы"
            type="submit"
            onSubmit={filterSubmit}
            disabled={loading}
          ></button>
        </div>
        <FilterCheckbox isChecked={isChecked} handleCheckbox={handleCheckbox} />
      </form>
    </section>
  );
}

export default Filter;
