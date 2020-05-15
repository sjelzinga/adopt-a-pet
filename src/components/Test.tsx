import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store/rootReducer";

import { requestAnimals } from "store/animal/animalActions";

export const Test = () => {
  const dispatch = useDispatch();
  const animals = useSelector<AppState, any>((state) => state.animals.animals);

  useEffect(() => {
    // dispatch(requestAnimals);
  }, []);
  console.log(animals);
  return <div>Hello</div>;
};
