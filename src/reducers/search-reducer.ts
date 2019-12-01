import * as actions from "../constants";

/** Type of Search state */
interface ISearchState {
  query: string;
  loading: boolean;
  error: any;
  results: any[];
}

/** Initial state of Search */
const initialSearchState = {
  query: "",
  loading: false,
  error: null,
  results: []
};

/** Reducer for Search actions */
export const searchReducer = (
  state: ISearchState = initialSearchState,
  action: any
) => {
  switch (action.type) {
    case actions.SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        query: action.payload.query,
        results: action.payload.results
      };
    case actions.SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case actions.CLEAR_SEARCH:
      return initialSearchState;
    default:
      return state;
  }
};
