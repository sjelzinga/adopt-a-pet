import { ActionType, IAction } from "store/globalTypes";
import { IPagination } from "./paginationActions";

export interface IPaginationState {
  countPerPage: number;
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

const initialState: IPaginationState = {
  countPerPage: 0,
  totalCount: 0,
  currentPage: 1,
  totalPages: 0,
};

const paginationReducer = (
  state = initialState,
  action: IAction<IPagination>
) => {
  switch (action.type) {
    case ActionType.RECEIVE_PAGINATION:
      const {
        countPerPage,
        totalCount,
        currentPage,
        totalPages,
      } = action.payload;
      return {
        ...initialState,
        countPerPage,
        totalCount,
        currentPage,
        totalPages,
      };
    case ActionType.NEXT_PAGE:
      return {
        ...state,
        currentPage: Math.min(state.currentPage + 1, state.totalPages),
      };
    case ActionType.PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: Math.min(state.currentPage + 1, state.totalPages),
      };
    default:
      return state;
  }
};

export default paginationReducer;
