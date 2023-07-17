import { React, useState } from "react";
import "./card.css";
import like from "../../images/like.svg";
import redLike from "../../images/redLike.svg";
import littleCross from "../../images/littleCross.svg";
import { Link } from "react-router-dom";
import { MOVIES_API } from "../../constants/Api";

function MoviesCard({ isActive, state, addMovie, card, deleteMovie, type }) {
  const savedMovies = JSON.parse(localStorage.getItem('savedMoviesList'));
  const [isLiked, setIsLiked] = useState(savedMovies?.some((i) => i.movieId === card.id))

    function handleLike() {  
      if (isLiked) {
        const savedMoviesList = JSON.parse(localStorage.getItem('savedMoviesList'));
        const savedCard = savedMoviesList.find((i) => i.movieId === card.id);
        deleteMovie(savedCard);
        console.log('disliked')
      } else if (!isLiked) {
        addMovie(card);
      }
      setIsLiked(!isLiked)
    }
  
    function handleDeleteMovie() {
      deleteMovie(card);
      setIsLiked(false);
    }

  return (
    <li className="card">
      <Link className="card__image-link" to={card.trailerLink} target="_blank">
        <img
          src={type ? (MOVIES_API + card.image.url) : card.image}
          className="card__image"
          alt={`Кадр из фильма ${card.nameRU} внутри карточки`}
        />
      </Link>
      <div className="card__sub-container">
        <h2 className="card__name">{card.nameRU}</h2>
        <button
          type="button"
          className="card__like-button"
          onClick={handleLike}
        >
          {!state ? (
            <img
              src={isActive || isLiked ? redLike : like}
              className="card__like"
              alt="Иконка лайка"
            ></img>
          ) : (
            <img
              src={littleCross}
              className="card__cross"
              alt="Иконка крестика - чтобы удалить карточку из избранного"
              onClick={handleDeleteMovie}
            ></img>
          )}
        </button>
        <p className="card__timing">{card.duration > 60 ? `${Math.floor(card.duration / 60)}ч ${card.duration % 60}м` : `${card.duration}м`}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
