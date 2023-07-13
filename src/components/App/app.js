import React, { useState, useEffect, useCallback } from "react";
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
import { FILM_DURATION } from "../constants/Constants";
import { filmsApi } from "../../utils/MoviesApi";
import { authApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  //данные api
  const [currentUser, setCurrentUser] = useState({});

  //данные локалсторедж

  //Авторизован пользователь или нет
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("loggedIn"))
  );

  // сообщения
  const [errorCreateUser, setErrorCreateUser] = useState("");
  const [errorAuthorization, setErrorAuthorization] = useState("");
  const [errorUpdateUser, setErrorUpdateUser] = useState("");
  const [messageOk, setMessageOk] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageOk("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [messageOk]);

  function handleResetError() {
    setErrorCreateUser("");
    setErrorAuthorization("");
    setErrorUpdateUser("");
  }

  function handleCreateUser({name, email, password}) {
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
      // .then(() => navigate('/movies'))
      .catch((err) => {
        setErrorAuthorization(err);
      });
  }

  const [isStripesMenuOpened, setIsStripesMenuOpened] = useState(false);
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
                  state={true}
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
              <ProtectedRoute>
                <Header
                  handleStripesClick={handleStripesClick}
                  isStripesMenuOpened={isStripesMenuOpened}
                  filmsUnderline={true}
                />
                <Movies
                  state={true}
                />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute>
                <Header
                  state={false}
                  handleStripesClick={handleStripesClick}
                  isStripesMenuOpened={isStripesMenuOpened}
                  savedFilmsUnderline={true}
                />
                <SavedMovies
                  state={false}
                />
                <Footer />
              </ProtectedRoute>
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
                  loggedIn={loggedIn}
                  resetError={handleResetError}
                  errorUpdateUser={errorUpdateUser}
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
