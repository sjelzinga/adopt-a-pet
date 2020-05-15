import { ActionType, IAction } from "store/globalTypes";
import { IAnimalState } from "./animalTypes";

const initialState: IAnimalState = {
  animals: null,
  loading: false,
  error: null,
};

const animalReducer = (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ActionType.RECEIVE_ANIMALS:
      return { ...initialState, animals: action.payload };
    default:
      return state;
  }
};

export default animalReducer;
