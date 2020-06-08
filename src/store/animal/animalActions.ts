import { ActionType, IAction } from "store/globalTypes";
import { IAnimal } from "./animalTypes";
import { Action } from "redux";

export const requestAnimalsLoading: Action<ActionType> = {
  type: ActionType.REQUEST_ANIMALS_LOADING,
};

export const requestAnimals = (pageNumber: number): IAction<number> => ({
  type: ActionType.REQUEST_ANIMALS,
  payload: pageNumber,
});

export const receiveAnimals = (animals: IAnimal[]): IAction<IAnimal[]> => ({
  type: ActionType.RECEIVE_ANIMALS,
  payload: animals,
});

export const requestAnimalsError: Action<ActionType> = {
  type: ActionType.REQUEST_ANIMALS_ERROR,
};

export const selectAnimal = (animalId: number): IAction<number> => ({
  type: ActionType.SELECT_ANIMAL,
  payload: animalId,
});
