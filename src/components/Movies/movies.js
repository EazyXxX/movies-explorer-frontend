import React from "react";
import Filter from "../Filter/filter";
import MoviesCardList from "../MoviesCardList/cards";
import Footer from "../Footer/footer";

function Movies() {
  return (
    <div className="movies">
      <Filter />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
