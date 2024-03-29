import React from 'react';
import '../MoviesCardList/cards.css';
import MoviesCard from '../MoviesCard/card'

function SavedMoviesCardList({ filteredMovies, deleteMovie, type }) {
  const movies = JSON.parse(localStorage.getItem('saveMoviesList'));
  const moviesElements = (filteredMovies.length > 0 ? filteredMovies : movies)?.slice(0, movies.length).map((card) => (
    <MoviesCard
      deleteMovie={deleteMovie}
      key={card._id}
      card={card}
      type={type}
    />
  ));
  return (
    <section className="cards">
      <div className='cards__list'>
        {moviesElements}
      </div>
    </section>
  );
}

export default SavedMoviesCardList;