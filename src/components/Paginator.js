import React from "react";

const Paginator = props => {
  const changeOffersPage = () => {
    const skip = parseInt(props.limit) * (parseInt(props.paginatorCounter) - 1);
    const newQuery = "?skip=" + skip + "&&limit=" + props.limit;

    props.setQueryPage(newQuery);
  };
  return (
    <div
      onClick={changeOffersPage}
      className="paginator"
      // to={"/offers/?skip=" + (paginatorCounter - 1)}
    >
      {props.paginatorCounter}
    </div>
  );
};

export default Paginator;
