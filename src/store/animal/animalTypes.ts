import { Action } from "redux";
import { ActionType } from "store/globalTypes";

type photoObject = { small: string; medium: string; large: string };
type breedObject = {
  primary: string;
  secondary: string;
  mixed: boolean;
  unknown: boolean;
};

type attributes = {
  spayed_neutered: boolean;
  house_trained: boolean;
  declawed: boolean;
  special_needs: boolean;
  shots_current: boolean;
};

type environment = {
  children: boolean | null;
  dogs: boolean | null;
  cats: boolean | null;
};

export interface IAnimal {
  id: number;
  type: string;
  age: string;
  breeds: breedObject;
  gender: string;
  name: string;
  coat: string;
  status: string;
  attributes: attributes;
  environment: environment;
  photo: object[];
  primary_photo_cropped: photoObject;
}

export interface IAnimalState {
  animals: any[] | null;
  loading: boolean;
  error: string | null;
  animal: IAnimal | null;
}
