import React from "react";

import "./App.scss";
import { AnimalList } from "components/animals/AnimalList/AnimalList";
import { Button } from "components/layout/Button/Button";

function App() {
  return (
    <div className="App">
      <AnimalList />
      <Button></Button>
    </div>
  );
}

export default App;
