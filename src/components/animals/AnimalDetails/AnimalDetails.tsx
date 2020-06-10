import React, { useEffect, useState, ReactNode } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectAnimal } from "store/animal/animalActions";
import { AppState } from "store/rootReducer";
import { IAnimalState } from "store/animal/animalTypes";
import { Button } from "components/layout/Button/Button";
import photoNotFound from "assets/images/not-found.png";

import { ReactComponent as Male } from "assets/svgs/male.svg";
import { ReactComponent as Female } from "assets/svgs/female.svg";
import { Header } from "components/layout/Header/Header";

import { filterObjectKeys } from "utils/functions";

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {}

export const AnimalDetails: React.FC<IProps> = ({ match }) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(photoNotFound);
  const { animal } = useSelector<AppState, IAnimalState>(
    (state) => state.animals
  );
  // console.log(animal);
  const animalId = parseInt(match.params.id);

  useEffect(() => {
    if (animal && animal.primary_photo_cropped) {
      setPhoto(animal.primary_photo_cropped.large);
    }
    dispatch(selectAnimal(animalId));
  }, [animal]);

  if (!animal) {
    return <div>Loading</div>;
  }

  const environment = filterObjectKeys(animal.environment);
  const attributes = filterObjectKeys(animal.attributes);

  const showContactDetails = () => {
    console.log("Show details");
  };

  const genderIcon =
    animal.gender === "Male" ? (
      <Male className="gender-icon-large" />
    ) : (
      <Female className="gender-icon-large" />
    );

  return (
    <div className="c-animal-details">
      <Header />
      <img className="c-animal-details__photo" src={photo} alt="pet" />
      <div className="c-animal-details__info">
        <div className="c-animal-details__row">
          <div className="c-animal-details__info--name">{animal.name}</div>
          <div className="c-animal-details__info--gender">{genderIcon}</div>
        </div>
        <div className="c-animal-details__info--age">{animal.age}</div>
        <div className="c-animal-details__heading">Breed</div>
        <div className="c-animal-details__info--breed">
          {animal.breeds.primary}
        </div>
        <div className="c-animal-details__heading">Coat</div>
        <div className="c-animal-details__info--coat">{animal.coat}</div>
        <div className="c-animal-details__enviroment">
          <div className="c-animal-details__heading">Good in a home with</div>
          <ul className="c-animal-details__enviroment__list">{environment}</ul>
        </div>
        <div className="c-animal-details__attributes">
          <div className="c-animal-details__heading">Health</div>
          <ul className="c-animal-details__attributes__list">{attributes}</ul>
        </div>
        <div className="c-animal-details__status"></div>
        <Button
          className="c-animal-details__btn"
          theme="primary"
          size="full"
          onClick={showContactDetails}
        >
          Ask about {animal.name}
        </Button>
      </div>
    </div>
  );
};
