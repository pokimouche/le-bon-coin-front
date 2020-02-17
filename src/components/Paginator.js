import React from "react";

const Paginator = props => {
  const totalPages = parseInt(props.count / props.limit);
  const currentPage = Math.ceil(props.skip / props.limit) + 1;
  const paginationMax = 19;
  let paginationStart;
  let paginationEnd;
  if (currentPage === totalPages || currentPage + paginationMax >= totalPages) {
    paginationStart = totalPages - paginationMax;
    paginationEnd = totalPages;
  } else if (currentPage > parseInt(paginationMax / 2)) {
    paginationStart = currentPage - parseInt(paginationMax / 2);
    paginationEnd = paginationStart + paginationMax;
  } else {
    paginationStart = 1;
    paginationEnd = paginationStart + paginationMax;
  }

  const createPaginator = () => {
    const paginator = [];
    for (let i = paginationStart; i < paginationEnd; i++) {
      let pageSelected = currentPage === i ? true : false;

      paginator.push(
        <div
          key={i}
          className={`${pageSelected ? "selected" : ""} paginator-link `}
          onClick={() => {
            const skip = parseInt(props.limit) * (parseInt(i) - 1);
            const newQuery = "?skip=" + skip + "&&limit=" + props.limit;
            props.setQueryPage(newQuery);
          }}
        >
          {i}
        </div>
      );
    }

    return paginator;
  };

  const goToNextPage = () => {
    const skip = parseInt(props.limit) * currentPage;
    const newQuery = "?skip=" + skip + "&&limit=" + props.limit;
    props.setQueryPage(newQuery);
  };

  const goToPreviousPage = () => {
    const skip = parseInt(props.limit) * (currentPage - 2);
    const newQuery = "?skip=" + skip + "&&limit=" + props.limit;
    props.setQueryPage(newQuery);
  };

  return (
    <div className="paginator-wrapper">
      <div
        onClick={goToPreviousPage}
        className={`${
          currentPage === 1
            ? "previous-paginator invisible"
            : "previous-paginator"
        }`}
      >
        <img src="/chevron-left.svg" alt="chevron-left"></img>
      </div>
      {createPaginator()}
      <div
        className={`${
          currentPage === totalPages
            ? "next-paginator invisible"
            : "next-paginator"
        }`}
        onClick={goToNextPage}
      >
        <img src="/chevron-right.svg" alt="chevron-right"></img>
      </div>
    </div>
  );
};

export default Paginator;
