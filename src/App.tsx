import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestAnimals } from "store/animal/animalActions";
// import "sass/app.scss";
import { AnimalList } from "components/animals/AnimalList/AnimalList";
import { Button } from "components/layout/Button/Button";
import { PageNav } from "components/layout/PageNav/PageNav";
import { AppState } from "store/rootReducer";
import { IPagination } from "store/pagination/paginationActions";
import { usePagination } from "hooks/usePagination";

function App() {
  const dispatch = useDispatch();
  const { currentPage, countPerPage, totalPages } = useSelector<
    AppState,
    IPagination
  >((state) => state.pagination);
  const { currentPageNumber, previous, next } = usePagination(totalPages);

  useEffect(() => {
    if (currentPageNumber) {
      dispatch(requestAnimals(currentPageNumber));
    }
  }, [currentPageNumber]);

  // console.log(countPerPage);
  return (
    <div className="App">
      <AnimalList />
      <Button></Button>
      <PageNav pageNumber={currentPage} prev={previous} next={next} />
    </div>
  );
}

export default App;
