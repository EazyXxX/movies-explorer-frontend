import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, Route, Routes } from "react-router-dom";
import "./app.css";
import Main from "../Main/Main";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Profile from "../Profile/profile";
import Login from "../Login/login";
import Register from "../Register/register";
import PageNotFound from "../PageNotFound/pageNotFound";
import Movies from "../Movies/movies";
import SavedMovies from "../SavedMovies/savedMovies";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute";
import { FILM_DURATION } from "../../constants/Constants";
import { filmsApi } from "../../utils/MoviesApi";
import { authApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  //данные api
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  //данные localStorage
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  //Авторизован пользователь, или нет
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("loggedIn"))
  );

  //состояния
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nullRequest, setNullRequest] = useState(false);
  const [nullResult, setNullRsult] = useState(false);

  const [saveLoading, setSaveLoading] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [saveNullRequest, setSaveNullRequest] = useState(false);
  const [saveNullResult, setSaveNullResult] = useState(false);

  // сообщения
  const [errorCreateUser, setErrorCreateUser] = useState("");
  const [errorAuthorization, setErrorAuthorization] = useState("");
  const [errorUpdateUser, setErrorUpdateUser] = useState("");
  const [messageOk, setMessageOk] = useState("");

  const [isStripesMenuOpened, setIsStripesMenuOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageOk("");
    }, 10000);

    return () => clearTimeout(timer);
  }, [messageOk]);

  function filterMovies(search, arr) {
    return arr.filter((item) => {
      return (
        item.nameEN.toLowerCase().includes(search.toLowerCase()) ||
        item.nameRU.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  function filterTime(arr) {
    return arr.filter((item) => {
      return item.duration < FILM_DURATION;
    });
  }

  function handleResetError() {
    setErrorCreateUser("");
    setErrorAuthorization("");
    setErrorUpdateUser("");
  }

  useEffect(() => {
    if (loggedIn) {
      const arrMovies = JSON.parse(localStorage.getItem("moviesList")) || [];
      const arrSavedMovies =
        JSON.parse(localStorage.getItem("saveMoviesList")) || [];
      if (arrMovies.length === 0) {
        Promise.all([filmsApi.getMovies(), authApi.getSavedMovies()])
          .then(([dataMovies, dataSavedMovies]) => {
            localStorage.setItem("moviesList", JSON.stringify(dataMovies));
            localStorage.setItem(
              "saveMoviesList",
              JSON.stringify(dataSavedMovies)
            );
            setMovies(JSON.parse(localStorage.getItem("moviesList")));
            setSavedMovies(JSON.parse(localStorage.getItem("saveMoviesList")));
          })
          .catch((err) => console.log(err, "Ошибка при получении данных."));
      } else {
        setMovies(arrMovies);
        setSavedMovies(arrSavedMovies);
      }
    }
  }, [loggedIn]);

  const searchMovies = async () => {
    setLoading(true);
    setError(false);
    setNullRequest(false);
    setNullRsult(false);

    try {
      const checked = JSON.parse(localStorage.getItem("checkboxState"));
      const searchQuery = localStorage.getItem("searchQuery");

      if (!searchQuery) {
        setTimeout(() => {
          setLoading(false);
          setNullRequest(true);
        }, 1000);
        return;
      }
      let dataFilteredMovies = [];
      if (checked && Boolean(searchQuery)) {
        dataFilteredMovies = await filterMovies(
          searchQuery,
          filterTime(movies)
        );
      } else if (searchQuery) {
        dataFilteredMovies = await filterMovies(searchQuery, movies);
      }
      setFilteredMovies(dataFilteredMovies);

      if (dataFilteredMovies.length === 0) {
        setNullRsult(true);
      }
      setLoading(false);
      return;
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  const searchSavedMovies = () => {
    setSaveLoading(true);
    setSaveError(false);
    setSaveNullRequest(false);
    setSaveNullResult(false);

    try {
      const checked = JSON.parse(localStorage.getItem("saveCheckboxState"));
      const searchQuery = localStorage.getItem("saveSearchQuery");

      if (!searchQuery && !checked) {
        setTimeout(() => {
          setSaveLoading(false);
          setSaveNullRequest(true);
        }, 1000);
        return;
      }

      let dataFilteredMovies = [];
      if (checked && Boolean(searchQuery)) {
        dataFilteredMovies = filterMovies(searchQuery, filterTime(savedMovies));
      } else if (searchQuery) {
        dataFilteredMovies = filterMovies(searchQuery, savedMovies);
      } else if (checked) {
        dataFilteredMovies = filterTime(savedMovies);
      }
      setFilteredSavedMovies(dataFilteredMovies);

      if (dataFilteredMovies.length === 0) {
        setSaveNullResult(true);
      }

      setSaveLoading(false);
      return;
    } catch (err) {
      setSaveLoading(false);
      setSaveError(true);
      console.log(err, "ошибка при поиске в сохраненках");
    }
  };

  function addMovie(data) {
    authApi
      .createMovie(data)
      .then((newMovie) => {
        const moviesList = JSON.parse(localStorage.getItem("saveMoviesList"));
        localStorage.setItem(
          "saveMoviesList",
          JSON.stringify([newMovie, ...moviesList])
        );
      })
      .catch((err) => console.log(err, "не удалось создать карточку"));
  }

  function deleteMovie(card) {
    authApi
      .deleteMovie(card._id)
      .then(() => {
        const del = JSON.parse(localStorage.getItem("saveMoviesList"));
        const updateSavedMovies = del.filter((i) => i._id !== card._id);
        const filteredUpdateSavedMovies = filteredSavedMovies.filter(
          (i) => i._id !== card._id
        );
        setSavedMovies(updateSavedMovies);
        setFilteredSavedMovies(filteredUpdateSavedMovies);
        localStorage.setItem(
          "saveMoviesList",
          JSON.stringify(updateSavedMovies)
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCreateUser({ name, email, password }) {
    authApi
      .register(name, email, password)
      .then(() => {
        handleAuthorization({ email, password });
      })
      .catch((err) => {
        setErrorCreateUser(err);
      });
  }

  function handleAuthorization({ email, password }) {
    authApi
      .authorize(email, password)
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        setErrorAuthorization(err);
      });
  }

  function handleUpdateUser({ name, email }) {
    authApi
      .editDataUser(email, name)
      .then((res) => {
        setMessageOk("Данные профиля успешно изменены.");
        setCurrentUser({ name: res.name, email: res.email });
      })
      .catch((err) => {
        setErrorUpdateUser(err);
      });
  }

  function tokenCheck() {
    authApi
      .checkToken()
      .then((res) => {
        if (res) {
          setCurrentUser({ name: res.name, email: res.email, id: res._id });
          setLoggedIn(true);
          localStorage.setItem("loggedIn", res._id);
        }
      })
      .catch((err) => {
        console.log(err, "Не удалось авторизировать пользователя.");
        signOut();
      });
  }

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  function signOut() {
    authApi
      .signOut()
      .then(() => {
        setSavedMovies([]);
        setMovies([]);
        setCurrentUser({});
        localStorage.removeItem("moviesList");
        localStorage.removeItem("saveMoviesList");

        localStorage.removeItem("searchQuery");
        localStorage.removeItem("checkboxState");

        localStorage.removeItem("saveSearchQuery");
        localStorage.removeItem("saveCheckboxState");

        localStorage.removeItem("path");
        localStorage.removeItem("loggedIn");

        setLoggedIn(false);
        navigate("/");
      })
      .catch((err) => console.log("Ошибка при выходе", err));
  }

  function handleStripesClick() {
    setIsStripesMenuOpened(!isStripesMenuOpened);
  }
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/signup"
            element={
              !loggedIn ? (
                <Register
                  errorCreateUser={errorCreateUser}
                  resetError={handleResetError}
                  onCreateUser={handleCreateUser}
                />
              ) : (
                <Navigate to="/movies" replace />
              )
            }
          />
          <Route
            path="/signin"
            element={
              !loggedIn ? (
                <Login
                  errorAuthorization={errorAuthorization}
                  resetError={handleResetError}
                  onLogin={handleAuthorization}
                />
              ) : (
                <Navigate to="/movies" replace />
              )
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header
                  handleStripesClick={handleStripesClick}
                  isStripesMenuOpened={isStripesMenuOpened}
                  mainUnderline={true}
                  loggedIn={loggedIn}
                />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                component={Movies}
                state={true}
                searchMovies={searchMovies}
                filteredMovies={filteredMovies}
                loading={loading}
                error={error}
                nullRequest={nullRequest}
                nullResult={nullResult}
                deleteMovie={deleteMovie}
                addMovie={addMovie}
                handleStripesClick={handleStripesClick}
                isStripesMenuOpened={isStripesMenuOpened}
                filmsUnderline={true}
                loggedIn={loggedIn}
              />
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                component={SavedMovies}
                state={false}
                movies={filteredSavedMovies}
                filteredMovies={filteredSavedMovies}
                loading={saveLoading}
                error={saveError}
                nullRequest={saveNullRequest}
                nullResult={saveNullResult}
                searchMovies={searchSavedMovies}
                deleteMovie={deleteMovie}
                setFilteredSavedMovies={setFilteredSavedMovies}
                handleStripesClick={handleStripesClick}
                isStripesMenuOpened={isStripesMenuOpened}
                savedFilmsUnderline={true}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header
                  handleStripesClick={handleStripesClick}
                  isStripesMenuOpened={isStripesMenuOpened}
                  profileUnderline={true}
                  loggedIn={loggedIn}
                />
                <Profile
                  resetError={handleResetError}
                  errorUpdateUser={errorUpdateUser}
                  signOut={signOut}
                  handleUpdateUser={handleUpdateUser}
                  messageOk={messageOk}
                />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
