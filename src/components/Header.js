import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = props => {
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
          <button className="login-btn">
            <FontAwesomeIcon icon="user" />
            <span>Se connecter</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
