import React from "react";
import Filter from "../Filter/filter";
import MoviesCardList from "../MoviesCardList/cards";
import Footer from "../Footer/footer";
import "./movies.css";
import Preloader from "../Preloader/preloader";
import Header from "../Header/header";

function Movies({ loggedIn, state, loading, nullRequest, nullResult, error, addMovie, deleteMovie, searchMovies, filteredMovies }) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
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
        {!loading && !error && !nullRequest && !nullResult && <MoviesCardList state={state} filteredMovies={filteredMovies} addMovie={addMovie} deleteMovie={deleteMovie} type={true} />}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
