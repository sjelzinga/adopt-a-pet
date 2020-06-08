import { ActionType, IAction } from 'store/globalTypes';
import { IAnimalState, IAnimal } from './animalTypes';

const initialState: IAnimalState = {
  animals: null,
  loading: false,
  error: null,
};

type payloadTypes = IAnimal | IAnimal[] | string;

const animalReducer = (state = initialState, action: IAction<payloadTypes>) => {
  switch (action.type) {
    case ActionType.REQUEST_ANIMALS_LOADING:
      return { ...initialState, loading: true };
    case ActionType.RECEIVE_ANIMALS:
      return { ...initialState, animals: action.payload };
    case ActionType.REQUEST_ANIMALS_ERROR:
      return { ...initialState, error: 'Something went wrong' };
    default:
      return state;
  }
};

export default animalReducer;
