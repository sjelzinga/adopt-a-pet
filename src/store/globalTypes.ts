import { Action } from "redux";

export interface IAction<T> extends Action<ActionType> {
  payload: T;
}

export interface IPureAction<T, P> extends Action<T> {
  payload: P;
}

export enum ActionType {
  REQUEST_ANIMALS,
  REQUEST_ANIMALS_LOADING,
  REQUEST_ANIMALS_ERROR,
  RECEIVE_ANIMALS,

  REQUEST_TODO,
  REQUEST_TODO_LOADING,
  REQUEST_TODO_ERROR,
  RECEIVE_TODO,

  SET_ERROR,
}
