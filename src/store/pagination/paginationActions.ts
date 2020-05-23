import { ActionType } from "store/globalTypes";

export interface IPagination {
  countPerPage: number;
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export const receivePagination = (pagination: any) => ({
  type: ActionType.RECEIVE_PAGINATION,
  payload: pagination,
});
