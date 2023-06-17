import React from "react";
import MoviesCard from "../MoviesCard/card";
import "./cards.css";
import "../Animation/animation.css";

function MoviesCardList() {
  return (
    <div className="cards">
      {/* <h3 className="cards__empty">Фильмы отсутствуют</h3> */}
      <div className="cards__list">
        <MoviesCard isActive={true} />
        <MoviesCard isActive={false} />
        <MoviesCard isActive={false} />
        <MoviesCard isActive={false} />
        <MoviesCard isActive={false} />
        <MoviesCard isActive={true} />
        <MoviesCard isActive={false} />
        <MoviesCard isActive={false} />
        <MoviesCard isActive={true} />
        <MoviesCard isActive={true} />
        <MoviesCard isActive={false} />
        <MoviesCard isActive={false} />
      </div>
      <button className="cards__more animation__button">Ещё</button>
    </div>
  );
}

export default MoviesCardList;
