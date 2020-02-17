import React, { useState, useEffect } from "react";
import Search from "../components/Search";
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

  const limit = parseInt(data.limit);
  const skip = parseInt(data.skip);

  return (
    <main>
      <div className="offers-ellipse"></div>
      <Search></Search>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <>
          <div className="container offers-wrapper">
            {data.offers.map((element, index) => {
              return <OfferItem key={element._id} {...element}></OfferItem>;
            })}
          </div>

          <Paginator
            count={data.count}
            limit={limit}
            skip={skip}
            setQueryPage={setQueryPage}
          ></Paginator>
        </>
      )}
    </main>
  );
};

export default Offers;
