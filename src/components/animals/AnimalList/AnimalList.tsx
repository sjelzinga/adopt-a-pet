import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/rootReducer";

import { AnimalListItem } from "../AnimalListItem/AnimalListItem";
import { IAnimalState } from "store/animal/animalTypes";
import { AnimalListItemSkeleton } from "../AnimalListItem/AnimalListItemSkeleton";

export const AnimalList: React.FC = () => {
  const { animals, loading } = useSelector<AppState, IAnimalState>(
    (state) => state.animals
  );

  //TODO: find better implementation for loading skeleton
  let loadingSkeletons = [];

  for (let i = 0; i < 5; i++) {
    loadingSkeletons.push(<AnimalListItemSkeleton key={i} />);
  }

  if (loading) {
    return <ul className="c-animal-list">{loadingSkeletons}</ul>;
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
