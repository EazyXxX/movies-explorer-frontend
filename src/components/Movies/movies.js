import React from "react";
import Filter from "../Filter/filter";
import MoviesCardList from "../MoviesCardList/cards";
import Footer from "../Footer/footer";
import "./movies.css";
import Preloader from "../Preloader/preloader";

function Movies({ state, loading, nullRequest, nullResult, error, addMovie, deleteMovie, searchMovies, filteredMovies }) {
  return (
    <>
      <main className="movies">
        <Filter 
        typeSearch={'search'}
        loading={loading}
        searchType={'searchQuery'}
        checkboxType={'checkboxState'}
        searchMovies={searchMovies}
        />
        {loading && <Preloader />}
        {nullRequest && <h3 className="movies__empty">Введите ключевое слово</h3>}
        {nullResult && <h3 className="movies__empty">Фильмы отсутствуют</h3>}
        {error && <h3 className="movies__empty">Во время запроса произошла ошибка. Попробуйте ещё раз</h3>}
        {!loading && !error && !nullRequest && !nullResult && <MoviesCardList filteredMovies={filteredMovies} addMovie={addMovie} deleteMovie={deleteMovie} type={true} />}
        {!state ? (
          <h3 className="movies__empty">Фильмы отсутствуют</h3>
        ) : (
          <MoviesCardList state={state} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
