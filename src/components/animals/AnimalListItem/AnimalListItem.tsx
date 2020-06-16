import React, { useState, useEffect } from "react";
import { IAnimal } from "store/animal/animalTypes";

import { ReactComponent as Male } from "assets/svgs/male.svg";
import { ReactComponent as Female } from "assets/svgs/female.svg";
import photoNotFound from "assets/images/not-found.png";
import { useHistory } from "react-router-dom";
import { paths } from "App";

interface IProps {
  animal: IAnimal;
}

export const AnimalListItem: React.FC<IProps> = ({ animal }) => {
  const history = useHistory();
  const [photo, setPhoto] = useState(photoNotFound);
  const { id, name, age, gender, breeds } = animal;

  useEffect(() => {
    if (animal.primary_photo_cropped) {
      setPhoto(animal.primary_photo_cropped.small);
    }
  }, [animal]);

  const onClickPet = () => {
    history.push(`${paths.animal}/${id}`);
  };

  const genderIcon =
    gender === "Male" ? (
      <Male className="gender-icon-small" />
    ) : (
      <Female className="gender-icon-small" />
    );

  return (
    <li className="c-animal-list-item" onClick={onClickPet}>
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
