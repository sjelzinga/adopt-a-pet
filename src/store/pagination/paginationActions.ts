import { ActionType, IAction } from "store/globalTypes";

export interface IPagination {
  countPerPage: number;
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export const receivePagination = (
  pagination: IPagination
): IAction<IPagination> => ({
  type: ActionType.RECEIVE_PAGINATION,
  payload: pagination,
});

export const previousPageAction = { type: ActionType.PREVIOUS_PAGE };
export const nextPageAction = { type: ActionType.NEXT_PAGE };
