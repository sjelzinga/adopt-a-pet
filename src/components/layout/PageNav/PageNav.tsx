import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  pageNumber: number;
  prev: () => void;
  next: () => void;
}

export const PageNav: React.FC<IProps> = ({ pageNumber, prev, next }) => {
  const previousPage = () => {
    console.log("prev");
    prev();
  };

  const nextPage = () => {
    console.log("next");
    next();
  };
  return (
    <div className="c-page-nav">
      <FontAwesomeIcon icon={faArrowLeft} onClick={previousPage} />
      {pageNumber}
      <FontAwesomeIcon icon={faArrowRight} onClick={nextPage} />
    </div>
  );
};
