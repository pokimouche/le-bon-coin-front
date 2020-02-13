import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import axios from "axios";
import OfferItem from "../components/OfferItem";
import Paginator from "../components/Paginator";

const Offers = () => {
  const [data, setData] = useState({});
  const [queryPage, setQueryPage] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://le-bon-coin-back.herokuapp.com/offer/with-count" + queryPage
      );
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [queryPage]);
  let paginatorCounter = 0;
  const limit = parseInt(data.limit);
  //const numberOfferByPage = 3;
  return (
    <main>
      <div className="offers-ellipse"></div>
      <Search></Search>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <>
          <div class="container offers-wrapper">
            {data.offers.reduce((array, element, index) => {
              if (
                index >= parseInt(data.skip) &&
                index < limit + parseInt(data.skip)
              ) {
                array.push(
                  <OfferItem key={element._id} {...element}></OfferItem>
                );
              }
              return array;
            }, [])}
          </div>
          <div className="paginator-wrapper">
            {data.offers.reduce((array, element, index) => {
              if ((index + 1) % limit === 0) {
                paginatorCounter++;
                array.push(
                  <Paginator
                    queryPage={queryPage}
                    setQueryPage={setQueryPage}
                    limit={limit}
                    key={index}
                    paginatorCounter={paginatorCounter}
                  ></Paginator>
                );
              }
              return array;
            }, [])}
          </div>
        </>
      )}
    </main>
  );
};

export default Offers;
