import { React, useState } from "react";
import "./card.css";
import like from "../../images/like.svg";
import redLike from "../../images/redLike.svg";
import cardImage from "../../images/cardImage.png";
import littleCross from "../../images/littleCross.svg";
import { Link } from "react-router-dom";

function MoviesCard({ isActive, filmName, filmLink, state }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <li className="card">
      <Link className="card__image-link" to={filmLink} target="_blank">
        <img
          src={cardImage}
          className="card__image"
          alt={`Кадр из фильма ${filmName} внутри карточки`}
        />
      </Link>
      <div className="card__sub-container">
        <h2 className="card__name">{filmName}</h2>
        <button
          type="button"
          className="card__like-button"
          onClick={handleLike}
        >
          {state ? (
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
            ></img>
          )}
        </button>
        <p className="card__timing">1ч 47м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
