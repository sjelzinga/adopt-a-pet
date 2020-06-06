import React, { useState, useEffect } from "react";
import { IAnimal } from "store/animal/animalTypes";

import { ReactComponent as Male } from "assets/svgs/male.svg";
import { ReactComponent as Female } from "assets/svgs/female.svg";
import photoNotFound from "assets/images/not-found.png";
import { Skeleton } from "components/layout/Skeleton/Skeleton";

interface IProps {
  animal: IAnimal;
}

export const AnimalListItem: React.FC<IProps> = ({ animal }) => {
  const [photo, setPhoto] = useState(photoNotFound);
  const { name, age, gender, breeds } = animal;

  useEffect(() => {
    if (animal.primary_photo_cropped) {
      setPhoto(animal.primary_photo_cropped.small);
    }
  }, [animal]);

  const genderIcon =
    gender === "Male" ? (
      <Male className="gender-icon" />
    ) : (
      <Female className="gender-icon" />
    );

  return (
    <li className="c-animal-list-item">
      <img className="c-animal-list-item__photo" src={photo} alt="pet" />

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
