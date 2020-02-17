import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const Header = props => {
  const logOut = () => {
    props.setToken("");
    Cookies.remove("token");
  };

  return (
    <header>
      <nav className=" container">
        <div className="nav-left">
          <img
            className="logo"
            src="/lebonCoinLogo.svg"
            alt="leBonCoin logo"
          ></img>

          <button className="submit-response-btn">
            <FontAwesomeIcon icon="plus" />
            <span>Déposer une Réponse</span>
          </button>
          <NavLink
            to="/Offers"
            activeClassName="selected"
            className="search-offer-btn"
          >
            <FontAwesomeIcon icon="search" />
            <span>Rechercher</span>
          </NavLink>
        </div>

        <div className="nav-right">
          {props.token === "" ? (
            <NavLink
              to="/login"
              activeClassName="selected"
              className="login-btn"
            >
              <FontAwesomeIcon icon="user" />
              <span>Se connecter</span>
            </NavLink>
          ) : (
            <button onClick={logOut} className="login-btn">
              <FontAwesomeIcon icon="user" />
              <span>Se déconnecter</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
