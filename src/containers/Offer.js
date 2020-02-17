import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = props => {
  const { id } = useParams();
  const defaultImage = "/default-img.jpg";
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://le-bon-coin-back.herokuapp.com/offer/" + id
      );
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);
  const date = new Date(data.created);
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
    <main className="header-fixed-margin container">
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <div className="offer-page">
          <div className="offer-wrapper">
            <div className="offer-content">
              <img
                className="offer-image"
                src={
                  data.pictures.length === 0 ? defaultImage : data.pictures[0]
                }
                alt={data.title}
              ></img>
              <div className="offer-content-wrapper">
                <div className="top-offer-content">
                  <p className="offer-page-title">{data.title}</p>
                  <p className="offer-page-price">
                    {data.price !== undefined ? data.price + " €" : ""}
                  </p>
                </div>

                <div className="bottom-offer-content">{formatedDate}</div>
              </div>
            </div>

            <div className="offer-page-description">
              <p className="description-label">Description</p>
              <p className="description-offer">{data.description}</p>
            </div>
          </div>
          <div className="offer-owner-wrapper">
            <div className="offer-owner">
              <div className="offer-owner-top">
                <p className="owner-name">{data.creator.account.username}</p>
                <p className="advertisement-number">
                  {data.nbOffers} annonces en ligne
                </p>
              </div>
              <div className="offer-owner-bottom">
                <button className="buy-btn">Acheter</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Offer;
