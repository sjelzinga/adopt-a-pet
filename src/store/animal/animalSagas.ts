import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { ActionType } from "store/globalTypes";
import PetfinderAPI from "services/api/PetfinderAPI";
import { receiveAnimals } from "./animalActions";
import {
  receivePagination,
  IPagination,
} from "store/pagination/paginationActions";

// type actionParams = { type: ActionType; params: any };

export function* getAnimals(params: any): any {
  console.log(params);
  yield put({ type: ActionType.REQUEST_ANIMALS_LOADING });
  try {
    const { data }: AxiosResponse<any> = yield call(
      PetfinderAPI.getAnimals,
      params.pageNumber
    );
    console.log(data.pagination);
    yield put(receiveAnimals(data.animals));
    const pagination = parsePagination(data.pagination);
    yield put(receivePagination(pagination));
  } catch (error) {
    console.log(error.message);
    yield put({ type: ActionType.REQUEST_ANIMALS_ERROR });
  }
}

const parsePagination = (pagination: any): IPagination => {
  return {
    countPerPage: pagination.count_per_page,
    totalCount: pagination.total_count,
    currentPage: pagination.current_page,
    totalPages: pagination.total_pages,
  };
};
