import React from "react";
import { IAnimal } from "store/animal/animalTypes";

interface IProps {
  animal: IAnimal;
}

export const AnimalListItem: React.FC<IProps> = ({ animal }) => {
  console.log(animal);
  const { name, age, type } = animal;

  return (
    <li>
      <div>{name}</div>
      <div>{age}</div>
      <div>{type}</div>
    </li>
  );
};
