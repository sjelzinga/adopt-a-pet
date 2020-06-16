import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "store/rootReducer";
import { IPagination } from "store/pagination/paginationActions";
import {
  previousPageAction,
  nextPageAction,
} from "store/pagination/paginationActions";

interface IProps {
  pages: number;
  // onPageChange: (pageNumber: number) => void;
}

export const PageNav: React.FC<IProps> = ({ pages }) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector<AppState, IPagination>(
    (state) => state.pagination
  );

  // useEffect(() => {
  //   console.log("change pageee");
  //   onPageChange(currentPage);
  // }, [currentPage]);

  const changeCurrentPageNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch an action
  };

  const previousPage = () => {
    dispatch(previousPageAction);
  };

  const nextPage = () => {
    dispatch(nextPageAction);
  };

  return (
    <div className="c-page-nav">
      <FontAwesomeIcon icon={faChevronLeft} onClick={previousPage} />
      <input
        type="text"
        onChange={changeCurrentPageNumber}
        value={currentPage}
        className="c-page-nav__input"
      />
      <span>/</span>
      <span className="c-page-nav__pages">{pages}</span>
      <FontAwesomeIcon icon={faChevronRight} onClick={nextPage} />
    </div>
  );
};
