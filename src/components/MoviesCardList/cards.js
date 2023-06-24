import React from "react";
import MoviesCard from "../MoviesCard/card";
import "./cards.css";

function MoviesCardList({ state }) {
  return (
    <section className="cards">
      {/* <h3 className="cards__empty">Фильмы отсутствуют</h3> */}
      <ul className="cards__list">
        <MoviesCard
          isActive={true}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={false}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={false}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={false}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={false}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={true}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={false}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={false}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={true}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={true}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={false}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
        <MoviesCard
          isActive={false}
          state={state}
          filmName="33 слова о дизайне"
          filmLink="https://www.youtube.com/watch?v=5ovzC93EneA"
        />
      </ul>
      <button type="button" className={`cards__more ${state? '' : 'cards__hidden'}`}>
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;