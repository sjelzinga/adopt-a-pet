import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store/rootReducer";
import { requestTodo } from "store/todo/todoActions";
import { ITodo } from "store/todo/types";
import PetfinderAPI from "services/api/PetfinderAPI";

export const Test = () => {
  const dispatch = useDispatch();
  const tst = useSelector<AppState, String>((state) => state.test);
  const todo = useSelector<AppState, ITodo>((state) => state.todo?.todo);

  const testAPI = () => {
    PetfinderAPI.client
      .get("/animals/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // dispatch(requestTodo);
    testAPI();
  }, []);
  console.log(todo);
  return <div>{tst}</div>;
};
