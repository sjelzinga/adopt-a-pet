import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store/rootReducer";
import { requestAnimals } from "store/animal/animalActions";
import { AnimalListItem } from "../AnimalListItem/AnimalListItem";

export const AnimalList: React.FC = () => {
  const dispatch = useDispatch();
  const animals = useSelector<AppState, any>((state) => state.animals.animals);

  useEffect(() => {
    dispatch(requestAnimals);
  }, []);

  return (
    <ul>
      {animals &&
        animals.map((animal: any) => <AnimalListItem animal={animal} />)}
    </ul>
  );
};
