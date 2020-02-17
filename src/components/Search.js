import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = props => {
  return (
    <div className="search-box">
      <form className="search-form">
        <div className="search-field-wrapper">
          <div className="search-icon">
            <FontAwesomeIcon icon="search" />
          </div>
          <input
            className="search-field"
            type="text"
            placeholder="Que cherchez-vous ?"
          ></input>
        </div>
        <button className="search-btn" type="submit">
          rechercher
        </button>
      </form>
    </div>
  );
};

export default Search;
