import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/rootReducer";

import { AnimalListItem } from "../AnimalListItem/AnimalListItem";
import { IAnimalState } from "store/animal/animalTypes";

export const AnimalList: React.FC = () => {
  const { animals, loading } = useSelector<AppState, IAnimalState>(
    (state) => state.animals
  );

  //TODO: create skeleton for loading

  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <ul className="c-animal-list">
      {animals &&
        animals.map((animal: any) => (
          <AnimalListItem key={animal.id} animal={animal} />
        ))}
    </ul>
  );
};
