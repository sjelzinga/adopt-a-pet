import React, { useState } from "react";

export const usePagination = (totalPages: number) => {
  const [currentPageNumber, setCurrentPage] = useState(1);

  const previous = () => {
    setCurrentPage((currentPageNumber) => Math.max(currentPageNumber - 1, 1));
  };

  const next = () => {
    setCurrentPage((currentPageNumber) =>
      Math.min(currentPageNumber + 1, totalPages)
    );
  };

  return { currentPageNumber, previous, next };
};
