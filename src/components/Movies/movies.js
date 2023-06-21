import React from "react";
import Filter from "../Filter/filter";
import MoviesCardList from "../MoviesCardList/cards";
import Footer from "../Footer/footer";

function Movies({ state }) {
  return (
    <section className="movies">
      <main>
      <Filter />
      <MoviesCardList state={state} />
      <Footer />
      </main>
    </section>
  );
}

export default Movies;
