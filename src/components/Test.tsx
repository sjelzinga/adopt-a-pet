import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store/rootReducer";
import { requestTodo } from "store/todo/todoActions";
import { ITodo } from "store/todo/types";

export const Test = () => {
  const dispatch = useDispatch();
  const tst = useSelector<AppState, String>((state) => state.test);
  const todo = useSelector<AppState, ITodo>((state) => state.todo?.todo);
  useEffect(() => {
    dispatch(requestTodo);
  }, []);
  console.log(todo);
  return <div>{tst}</div>;
};
