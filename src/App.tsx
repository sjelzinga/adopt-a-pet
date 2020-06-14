import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { AnimalDetails } from "components/animals/AnimalDetails/AnimalDetails";
import { useDispatch, useSelector } from "react-redux";
import { requestAnimals } from "store/animal/animalActions";
import { AppState } from "store/rootReducer";
import { IPagination } from "store/pagination/paginationActions";

export const paths = {
  home: "/",
  animal: "/animals",
  animalParam: "/animals/:id",
};

function App() {
  const dispatch = useDispatch();
  const { currentPage } = useSelector<AppState, IPagination>(
    (state) => state.pagination
  );

  useEffect(() => {
    dispatch(requestAnimals(currentPage));
  }, [currentPage]);

  return (
    <Router>
      <Route exact path={paths.home} component={HomePage} />
      <Route exact path={paths.animalParam} component={AnimalDetails} />
    </Router>
  );
}

export default App;
