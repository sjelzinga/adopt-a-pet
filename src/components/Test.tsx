import React from "react";
import { useSelector } from "react-redux";
import { appState } from "store/rootReducer";

export const Test = () => {
  const tst = useSelector<appState, String>((state) => state.test);
  return <div>{tst}</div>;
};
