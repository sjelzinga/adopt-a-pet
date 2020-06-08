import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AnimalList } from "components/animals/AnimalList/AnimalList";
import { PageNav } from "components/layout/PageNav/PageNav";
import { requestAnimals } from "store/animal/animalActions";
import { AppState } from "store/rootReducer";
import { IPagination } from "store/pagination/paginationActions";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { totalPages } = useSelector<AppState, IPagination>(
    (state) => state.pagination
  );

  const getAnimals = (pageNumber: number) => {
    dispatch(requestAnimals(pageNumber));
  };

  return (
    <div className="p-homepage">
      <AnimalList />
      <PageNav pages={totalPages} onPageChange={getAnimals} />
    </div>
  );
};
