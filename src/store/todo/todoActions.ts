import { ActionType, IPureAction } from "store/globalTypes";
import { ITodo } from "./types";

export const requestTodo = {
  type: ActionType.REQUEST_TODO,
};

export const receiveTodo = (todo: ITodo): IPureAction<ActionType, ITodo> => {
  return {
    type: ActionType.RECEIVE_TODO,
    payload: todo,
  };
};
