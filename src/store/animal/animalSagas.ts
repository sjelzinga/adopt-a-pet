import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { ActionType } from "store/globalTypes";
import PetfinderAPI from "services/api/PetfinderAPI";
import { receiveAnimals } from "./animalActions";

export function* getAnimals(): any {
  yield put({ type: ActionType.REQUEST_ANIMALS_LOADING });
  try {
    const { data }: AxiosResponse<any> = yield call(PetfinderAPI.getAnimals);
    yield put(receiveAnimals(data.animals));
  } catch (error) {
    console.log(error.message);
    yield put({ type: ActionType.REQUEST_ANIMALS_ERROR });
  }
}
