import React from "react";
import { Link } from "react-router-dom";
const defaultImage = "/default-img.jpg";
const OfferItem = props => {
  const date = new Date(props.created);
  let formatedDate =
    date.getDay() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear() +
    "  à " +
    date.getHours() +
    ":" +
    date.getMinutes();
  return (
    <Link to={`/offer/${props._id}`} className="offer-item-wrapper">
      <div class="offer-img-wrapper">
        <img
          className="offer-image"
          src={props.pictures.length === 0 ? defaultImage : props.pictures[0]}
          alt={props.title}
        ></img>
      </div>
      <div className="offer-item-description-wrapper">
        <div class="top-offer-description">
          <p className="offer-title">{props.title}</p>
          <p className="offer-price">
            {props.price !== undefined ? props.price + " €" : null}
          </p>
        </div>
        <div class="bottom-offer-description"></div>
        {formatedDate}
      </div>
    </Link>
  );
};

export default OfferItem;
