import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { AnimalDetails } from "components/animals/AnimalDetails/AnimalDetails";

export const paths = {
  home: "/",
  animal: "/animals",
  animalParam: "/animals/:id",
};

function App() {
  return (
    <Router>
      <Route exact path={paths.home} component={HomePage} />
      <Route exact path={paths.animalParam} component={AnimalDetails} />
    </Router>
  );
}

export default App;
