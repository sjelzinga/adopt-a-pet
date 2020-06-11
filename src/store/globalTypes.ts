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
  SELECT_ANIMAL,

  RECEIVE_PAGINATION,
  PREVIOUS_PAGE,
  NEXT_PAGE,
}
