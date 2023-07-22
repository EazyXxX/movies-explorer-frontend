import React from "react";
import Filter from "../Filter/filter";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import Preloader from "../Preloader/preloader";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function SavedMovies({
  loggedIn,
  state,
  filteredMovies,
  setFilteredSavedMovies,
  searchMovies,
  loading,
  nullRequest,
  nullResult,
  error,
  deleteMovie,
  handleStripesClick,
  isStripesMenuOpened,
  theme,
}) {
  return (
    <>
      <Header
        theme={theme}
        loggedIn={loggedIn}
        handleStripesClick={handleStripesClick}
        isStripesMenuOpened={isStripesMenuOpened}
        savedFilmsUnderline={true}
      />
      <main className="movies">
        <Filter
          typeSearch={"saveSearch"}
          loading={loading}
          searchType={"saveSearchQuery"}
          checkboxType={"saveCheckboxState"}
          searchMovies={searchMovies}
          setFilteredSavedMovies={setFilteredSavedMovies}
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
          <SavedMoviesCardList
            state={state}
            filteredMovies={filteredMovies}
            type={false}
            deleteMovie={deleteMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
