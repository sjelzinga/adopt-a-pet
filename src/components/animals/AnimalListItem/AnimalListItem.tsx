import React, { useState, useEffect } from "react";
import { IAnimal } from "store/animal/animalTypes";

interface IProps {
  animal: IAnimal;
}

export const AnimalListItem: React.FC<any> = (props) => {
  // console.log(props.animal);
  // console.log(props.animal.primary_photo_cropped);
  const [pic, setPic] = useState("https://via.placeholder.com/300");

  const { name, age, type } = props.animal;

  useEffect(() => {
    if (props.animal.primary_photo_cropped) {
      setPic(props.animal.primary_photo_cropped.small);
    }
  }, []);

  return (
    <li className="c-animal-list-item">
      <div className="c-animal-list-item__photo">
        <img className="c-animal-list-item__photo--size" src={pic} alt="pet" />
      </div>

      <div className="c-animal-list-item__info">
        <div>{age}</div>
        <div>{type}</div>
      </div>
    </li>
  );
};
