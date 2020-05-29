import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestAnimals } from "store/animal/animalActions";
// import "sass/app.scss";
import { AnimalList } from "components/animals/AnimalList/AnimalList";
import { PageNav } from "components/layout/PageNav/PageNav";
import { AppState } from "store/rootReducer";
import { IPagination } from "store/pagination/paginationActions";

function App() {
  const dispatch = useDispatch();
  const { totalPages } = useSelector<AppState, IPagination>(
    (state) => state.pagination
  );

  const getAnimals = (pageNumber: number) => {
    dispatch(requestAnimals(pageNumber));
  };

  return (
    <div className="App">
      <AnimalList />
      <PageNav pages={totalPages} onPageChange={getAnimals} />
    </div>
  );
}

export default App;
