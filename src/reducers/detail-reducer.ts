import * as actions from "../constants";

/** Type of Detail state */
interface IDetailState {
  loading: boolean;
  error: any;
  detailData: {};
}

/** Initial state of Detail */
const initialDetailState = {
  loading: false,
  error: null,
  detailData: {}
};

/** Reducer for Detail actions */
export const detailReducer = (
  state: IDetailState = initialDetailState,
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
      return initialDetailState;
    default:
      return state;
  }
};
