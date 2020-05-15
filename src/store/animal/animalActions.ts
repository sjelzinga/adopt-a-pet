import { ActionType } from "store/globalTypes";

export const requestAnimals = { type: ActionType.REQUEST_ANIMALS };

export const receiveAnimals = (animals: any[]) => ({
  type: ActionType.RECEIVE_ANIMALS,
  payload: animals,
});
