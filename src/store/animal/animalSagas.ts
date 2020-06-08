import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { IAction } from "store/globalTypes";
import PetfinderAPI from "services/api/PetfinderAPI";
import {
  requestAnimalsLoading,
  receiveAnimals,
  requestAnimalsError,
} from "./animalActions";
import {
  receivePagination,
  IPagination,
} from "store/pagination/paginationActions";

export function* getAnimals(params: IAction<number>): any {
  yield put(requestAnimalsLoading);
  try {
    const { data }: AxiosResponse<any> = yield call(
      PetfinderAPI.getAnimals,
      params.payload
    );

    yield put(receiveAnimals(data.animals));
    const pagination = parsePagination(data.pagination);
    yield put(receivePagination(pagination));
  } catch (error) {
    // console.log(error.message);
    console.log(error.response);
    // console.log(error.response.status);
    yield put(requestAnimalsError);
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
