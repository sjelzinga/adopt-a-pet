import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store/rootReducer";
import { requestTodo } from "store/todo/todoActions";
import { ITodoState } from "store/todo/types";

export const Test = () => {
  const dispatch = useDispatch();
  const tst = useSelector<AppState, String>((state) => state.test);
  const { todo, loading } = useSelector<AppState, ITodoState>(
    (state) => state.todo
  );
  const error = useSelector<AppState, any>((state) => state.error);

  useEffect(() => {
    dispatch(requestTodo);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(todo);
  console.log("loading", loading);
  console.log("error", error);
  return <div>{tst}</div>;
};
