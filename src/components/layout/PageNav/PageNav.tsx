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
  onPageChange: (pageNumber: number) => void;
}

export const PageNav: React.FC<IProps> = ({ pages, onPageChange }) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector<AppState, IPagination>(
    (state) => state.pagination
  );

  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("in");
    onPageChange(currentPage);
  }, [currentPage]);

  const changeCurrentPageNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setCurrentPage(parseInt(e.target.value));
  };

  const previousPage = () => {
    // setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    dispatch(previousPageAction);
  };

  const nextPage = () => {
    // setCurrentPage((currentPage) => Math.min(currentPage + 1, pages));
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
