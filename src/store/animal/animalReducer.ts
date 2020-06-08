import { ActionType, IAction } from "store/globalTypes";
import { IAnimalState, IAnimal } from "./animalTypes";

const initialState: IAnimalState = {
  animals: null,
  loading: false,
  error: null,
  animal: null,
};

type payloadTypes = (IAnimal | IAnimal[]) & number;

const selectAnimal = (animals: IAnimal[], id: number) => {
  return animals.find((animal) => animal.id === id);
};

const animalReducer = (state = initialState, action: IAction<payloadTypes>) => {
  switch (action.type) {
    case ActionType.REQUEST_ANIMALS_LOADING:
      return { ...initialState, loading: true };
    case ActionType.RECEIVE_ANIMALS:
      return { ...initialState, animals: action.payload };
    case ActionType.REQUEST_ANIMALS_ERROR:
      return { ...initialState, error: "Something went wrong" };
    case ActionType.SELECT_ANIMAL:
      if (state.animals) {
        return {
          ...initialState,
          animal: selectAnimal(state.animals, action.payload),
        };
      }
      return { ...state };
    default:
      return state;
  }
};

export default animalReducer;

// if (state.animals && Number.isInteger(action.payload)) {
//   return {
//     ...initialState,
//     animal: selectAnimal(state.animals, parseInt(action.payload)),
//   };
// }
