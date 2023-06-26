import "./header.css";
import logo from "../../images/logo.svg";
import Navtab from "../NavTab/navtab";
import Navigation from "../Navigation/navigation.js";
import { Link } from "react-router-dom";

function header({ state, handleStripesClick, isStripesMenuOpened, mainUnderline, filmsUnderline, savedFilmsUnderline, profileUnderline  }) {
  return (
    <header className={`header ${isStripesMenuOpened ? "opened" : ""}`}>
      <Link to="/">
        <img className="header__logo" alt="Логотип сайта" src={logo} />
      </Link>
      {state ? (
        <Navtab />
      ) : (
        <Navigation
          handleStripesClick={handleStripesClick}
          isStripesMenuOpened={isStripesMenuOpened}
          mainUnderline = {mainUnderline}
          filmsUnderline={filmsUnderline}
          savedFilmsUnderline ={savedFilmsUnderline}
          profileUnderline={profileUnderline}
        />
      )}
    </header>
  );
}

export default header;
