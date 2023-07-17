import { React, useState, useEffect, useCallback } from "react";
import MoviesCard from "../MoviesCard/card";
import "./cards.css";
import {
  WINDOW__SIZE_DESKTOP,
  WINDOW__SIZE_TABLET,
  MOVIES_ROW_DESKTOP,
  MOVIES_ROW_TABLET,
  MOVIES_ROW_MOBILE,
  MOVIES_LINE_DESKTOP,
  MOVIES_LINE_MOBILE,
} from "../../constants/Constants";

function MoviesCardList({ state, filteredMovies, addMovie, deleteMovie, type }) {
  const [size, setSize] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > WINDOW__SIZE_DESKTOP) {
        setSize(MOVIES_LINE_DESKTOP);
        setStartIndex(MOVIES_ROW_DESKTOP);
      } else if (window.innerWidth > WINDOW__SIZE_TABLET) {
        setSize(MOVIES_LINE_MOBILE);
        setStartIndex(MOVIES_ROW_TABLET);
      } else {
        setSize(MOVIES_LINE_MOBILE);
        setStartIndex(MOVIES_ROW_MOBILE);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [filteredMovies]);

  const handleShowMore = useCallback(() => {
    if (filteredMovies.length > startIndex + size) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  },[filteredMovies, size, startIndex])

  useEffect(() => {
    handleShowMore();
  }, [startIndex, filteredMovies, handleShowMore]);

  function handleClick() {
    setStartIndex(startIndex + size);
    handleShowMore();
  }
  const moviesElements = filteredMovies
    .slice(0, showMore ? startIndex : filteredMovies.length)
    .map((card) => (
      <MoviesCard
        addMovie={addMovie}
        deleteMovie={deleteMovie}
        key={card.id}
        card={card}
        type={type}
      />
    ));

  return (
    <section className="cards">
      <ul className="cards__list">
        {moviesElements}
      </ul>
      <button
        type="button"
        className={`cards__more ${state ? "" : "cards__hidden"}`}
        onClick={handleClick}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
