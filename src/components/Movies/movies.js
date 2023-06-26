import React from "react";
import Filter from "../Filter/filter";
import MoviesCardList from "../MoviesCardList/cards";
import Footer from "../Footer/footer";
import './movies.css'

function Movies({ state }) {
  return (
    <>
      <main className="movies">
          <Filter />
          <MoviesCardList state={state} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
