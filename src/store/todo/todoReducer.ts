import { ITodo, ITodoState } from "./types";
import { ActionType, IAction } from "store/globalTypes";

const initialState: ITodoState = {
  todo: null,
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action: IAction<ITodo>) => {
  switch (action.type) {
    case ActionType.RECEIVE_TODO:
      return { ...initialState, todo: action.payload };
    case ActionType.REQUEST_TODO_LOADING:
      return { ...initialState, loading: true };
    case ActionType.REQUEST_TODO_ERROR:
      console.log("in");
      return { ...initialState, error: "Er is iets mis gegaan" };
    default:
      return state;
  }
};

export default todoReducer;
