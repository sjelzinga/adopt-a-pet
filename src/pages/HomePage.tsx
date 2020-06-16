import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AnimalList } from "components/animals/AnimalList/AnimalList";
import { PageNav } from "components/layout/PageNav/PageNav";
import { requestAnimals } from "store/animal/animalActions";
import { AppState } from "store/rootReducer";
import { IPagination } from "store/pagination/paginationActions";
import StickyContainer from "components/layout/StickyContainer/StickyContainer";
import { FilterMenu } from "components/layout/FilterMenu/FilterMenu";

export const HomePage = () => {
  const { totalPages } = useSelector<AppState, IPagination>(
    (state) => state.pagination
  );

  return (
    <div className="p-homepage">
      <StickyContainer position="top">
        <FilterMenu></FilterMenu>
      </StickyContainer>
      <AnimalList />
      <PageNav pages={totalPages} />
    </div>
  );
};
