import { React, useState } from "react";
import "./card.css";
import like from "../../images/like.svg";
import redLike from "../../images/redLike.svg";
import cardImage from "../../images/cardImage.png";
import "../Animation/animation.css";

function MoviesCard({ isActive }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="card">
      <img src={cardImage} className="card__image" alt="Кадр из фильма" />
      <div className="card__sub-container">
        <h4 className="card__name">33 слова о дизайне</h4>
        <button
          className="card__like-button animation__button"
          onClick={handleLike}
        >
          <img
            src={isActive || isLiked ? redLike : like}
            className="card__like"
            alt="Иконка лайка"
          ></img>
        </button>
        <p className="card__timing">1ч 47м</p>
      </div>
    </div>
  );
}

export default MoviesCard;
