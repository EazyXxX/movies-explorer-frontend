import React from "react";
import Filter from "../Filter/filter";
import MoviesCardList from "../MoviesCardList/cards";

function SavedMovies() {
  return (
    <div className="movies">
      <Filter />
      <MoviesCardList />
    </div>
  );
}

export default SavedMovies;
