import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/rootReducer";

import { AnimalListItem } from "../AnimalListItem/AnimalListItem";

export const AnimalList: React.FC = () => {
  const animals = useSelector<AppState, any>((state) => state.animals.animals);

  return (
    <ul className="c-animal-list">
      <li>Cool</li>
      {animals &&
        animals.map((animal: any) => <AnimalListItem animal={animal} />)}
    </ul>
  );
};
