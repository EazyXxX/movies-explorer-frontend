import "./header.css";
import logo from "../../images/logo.svg";
import "../Animation/animation.css";
import Navtab from "../NavTab/navtab";
import Navigation from "../Navigation/navigation.js";
import { Link } from "react-router-dom";

function header({ state, handleStripesClick, isStripesMenuOpened }) {
  return (
    <header className={`header ${isStripesMenuOpened ? "opened" : ""}`}>
      <Link className="animation__button" to="/">
        <img className="header__logo" alt="Логотип сайта" src={logo} />
      </Link>
      {state ? (
        <Navtab />
      ) : (
        <Navigation
          handleStripesClick={handleStripesClick}
          isStripesMenuOpened={isStripesMenuOpened}
        />
      )}
    </header>
  );
}

export default header;
