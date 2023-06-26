import React from "react";
import Filter from "../Filter/filter";
import MoviesCardList from "../MoviesCardList/cards";

function SavedMovies({ state }) {
  return (
      <main className="movies">
      <Filter />
      <MoviesCardList state={state} />
      </main>
  );
}

export default SavedMovies;
