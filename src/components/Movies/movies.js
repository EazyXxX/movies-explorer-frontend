import React from "react";
import Filter from "../Filter/filter";
import MoviesCardList from "../MoviesCardList/cards";
import Footer from "../Footer/footer";
import "./movies.css";
import Preloader from "../Preloader/preloader";
import Header from "../Header/header";

function Movies({
  state,
  nullResult,
  loading,
  nullRequest,
  error,
  addMovie,
  deleteMovie,
  searchMovies,
  filteredMovies,
  loggedIn,
  isStripesMenuOpened,
  handleStripesClick,
  filmsUnderline,
}) {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        isStripesMenuOpened={isStripesMenuOpened}
        handleStripesClick={handleStripesClick}
        filmsUnderline={filmsUnderline}
      />
      <div className="movies">
        <Filter
          typeSearch={"search"}
          loading={loading}
          searchType={"searchQuery"}
          checkboxType={"checkboxState"}
          searchMovies={searchMovies}
        />
        {loading && <Preloader />}
        {nullRequest && (
          <h3 className="movies__empty">Введите ключевое слово</h3>
        )}
        {nullResult && <h3 className="movies__empty">Фильмы отсутствуют</h3>}
        {error && (
          <h3 className="movies__empty">
            Во время запроса произошла ошибка. Попробуйте ещё раз
          </h3>
        )}
        {!loading && !error && !nullRequest && !nullResult && (
          <MoviesCardList
            state={state}
            filteredMovies={filteredMovies}
            addMovie={addMovie}
            deleteMovie={deleteMovie}
            type={true}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Movies;
