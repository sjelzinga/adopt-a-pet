import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAnimal } from "store/animal/animalActions";
import { AppState } from "store/rootReducer";
import { IAnimal, IAnimalState } from "store/animal/animalTypes";
import { AnimalListItem } from "../AnimalListItem/AnimalListItem";
import { Button } from "components/layout/Button/Button";

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {}

export const AnimalDetails: React.FC<IProps> = ({ match }) => {
  const dispatch = useDispatch();
  const { animal } = useSelector<AppState, IAnimalState>(
    (state) => state.animals
  );
  console.log(animal);
  const animalId = parseInt(match.params.id);

  useEffect(() => {
    dispatch(selectAnimal(animalId));
  }, []);

  if (!animal) {
    return <div>Loading</div>;
  }

  return (
    <div className="c-animal-details">
      <img
        className="c-animal-details__photo"
        src={animal.primary_photo_cropped.large}
        alt="pet"
      />
      <Button>Contact</Button>
    </div>
  );
};
