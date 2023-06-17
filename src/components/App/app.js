import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [isStripesMenuOpened, setIsStripesMenuOpened] = useState(false);
  function handleStripesClick() {
    setIsStripesMenuOpened(!isStripesMenuOpened);
  }
  return (
    <div className="page">
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header
                state={true}
                handleStripesClick={handleStripesClick}
                isStripesMenuOpened={isStripesMenuOpened}
              />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header
                handleStripesClick={handleStripesClick}
                isStripesMenuOpened={isStripesMenuOpened}
              />
              <Movies />
            </>
          }
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <>
              <Header
                state={true}
                handleStripesClick={handleStripesClick}
                isStripesMenuOpened={isStripesMenuOpened}
              />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Profile />
            </>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
