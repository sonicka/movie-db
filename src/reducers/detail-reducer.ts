import * as actions from "../constants";

interface IInitialDataState {
  loading: boolean;
  error: any;
  detailData: {};
}

const initialDataState = {
  loading: false,
  error: null,
  detailData: {}
};

export const detailReducer = (
  state: IInitialDataState = initialDataState,
  action: any
) => {
  switch (action.type) {
    case actions.FETCH_DETAIL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload.category,
        detailData: action.payload.data
      };
    case actions.FETCH_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    case actions.REMOVE_DETAIL:
      return initialDataState;
    default:
      return state;
  }
};
