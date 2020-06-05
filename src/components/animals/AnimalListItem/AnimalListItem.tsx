import React, { useState, useEffect } from "react";
import { IAnimal } from "store/animal/animalTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faMars } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  animal: IAnimal;
}

export const AnimalListItem: React.FC<IProps> = ({ animal }) => {
  const [pic, setPic] = useState("https://via.placeholder.com/300");

  const { name, age, gender, breeds } = animal;

  useEffect(() => {
    if (animal.primary_photo_cropped) {
      setPic(animal.primary_photo_cropped.small);
    }
  }, [animal]);

  const genderIcon = (
    <FontAwesomeIcon
      icon={gender === "Male" ? faMars : faVenus}
      size="2x"
      className="gender-icon"
    />
  );

  return (
    <li className="c-animal-list-item">
      <div className="c-animal-list-item__photo">
        <img className="c-animal-list-item__photo--size" src={pic} alt="pet" />
      </div>

      <div className="c-animal-list-item__info">
        <div className="c-animal-list-item__info__row">
          <div className="c-animal-list-item__info--name">{name}</div>
          <div className="c-animal-list-item__info--gender">{genderIcon}</div>
        </div>
        <div className="c-animal-list-item__info--breed">{breeds.primary}</div>
        <div className="c-animal-list-item__info--age">{age}</div>
      </div>
    </li>
  );
};
