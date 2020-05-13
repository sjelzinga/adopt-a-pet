import { call, put } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from "axios";

import API from "services/api/API";
import { ActionType } from "store/globalTypes";
import { receiveTodo } from "./todoActions";
import { ITodo } from "./types";
import { setError } from "store/error/errorActions";

export function* getTodo(): any {
  yield put({ type: ActionType.REQUEST_TODO_LOADING });
  try {
    const { data: todo }: AxiosResponse<ITodo> = yield call(
      API.client.get,
      `/todos/1`
    );
    yield put(receiveTodo(todo));
  } catch (error) {
    console.log(error.response);
    yield put({ type: ActionType.REQUEST_TODO_ERROR });
    yield put(setError(error.response));
  }
}
