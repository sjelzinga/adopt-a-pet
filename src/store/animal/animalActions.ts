import { ActionType } from "store/globalTypes";

// export const requestAnimals = { type: ActionType.REQUEST_ANIMALS };

// type filterOptions = { breed: string };
// type paginationOptions = { pageNumber: number };

export const requestAnimals = (pageNumber: number) => ({
  type: ActionType.REQUEST_ANIMALS,
  pageNumber,
});

export const receiveAnimals = (animals: any[]) => ({
  type: ActionType.RECEIVE_ANIMALS,
  payload: animals,
});
