import React from "react";
import Filter from "../Filter/filter";
import MoviesCardList from "../MoviesCardList/cards";

function SavedMovies({ state }) {
  return (
    <section className="movies">
      <main>
      <Filter />
      <MoviesCardList state={state} />
      </main>
    </section>
  );
}

export default SavedMovies;
