import { ITodo, ITodoState } from "./types";
import { ActionType, IAction } from "store/globalTypes";

const initialState: ITodoState = {
  todo: null,
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ActionType.RECEIVE_TODO:
      return { ...initialState, todo: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
