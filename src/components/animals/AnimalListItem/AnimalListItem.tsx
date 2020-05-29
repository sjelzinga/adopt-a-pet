import React, { useState, useEffect } from 'react';
import { IAnimal } from 'store/animal/animalTypes';

interface IProps {
  animal: IAnimal;
}

export const AnimalListItem: React.FC<IProps> = ({ animal }) => {
  const [pic, setPic] = useState('https://via.placeholder.com/300');

  const { name, age, type } = animal;

  useEffect(() => {
    if (animal.primary_photo_cropped) {
      setPic(animal.primary_photo_cropped.small);
    }
  }, [animal]);

  return (
    <li className="c-animal-list-item">
      <div className="c-animal-list-item__photo">
        <img className="c-animal-list-item__photo--size" src={pic} alt="pet" />
      </div>

      <div className="c-animal-list-item__info">
        <div>{name}</div>
        <div>{age}</div>
        <div>{type}</div>
      </div>
    </li>
  );
};
