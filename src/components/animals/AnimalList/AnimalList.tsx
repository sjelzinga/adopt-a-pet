import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/rootReducer";

import { AnimalListItem } from "../AnimalListItem/AnimalListItem";
import { IAnimalState } from "store/animal/animalTypes";
import { Skeleton } from "components/layout/Skeleton/Skeleton";
import { AnimalListItemSkeleton } from "../AnimalListItem/AnimalListItemSkeleton";

export const AnimalList: React.FC = () => {
  const { animals, loading } = useSelector<AppState, IAnimalState>(
    (state) => state.animals
  );

  //TODO: create skeleton for loading

  let loadingSkeletons = [];

  for (let i = 0; i < 5; i++) {
    loadingSkeletons.push(<AnimalListItemSkeleton />);
  }

  if (loading) {
    return <div>{loadingSkeletons}</div>;
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
