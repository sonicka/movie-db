import * as actions from "../constants";

interface IInitialSearchState {
  query: string;
  loading: boolean;
  error: any;
  results: any[];
}

const initialSearchState = {
  query: "",
  loading: false,
  error: null,
  results: []
};

export const searchReducer = (
  state: IInitialSearchState = initialSearchState,
  action: any
) => {
  switch (action.type) {
    case actions.SEARCH_BEGIN:
      return {
        ...state,
        query: action.payload.query,
        loading: true,
        error: null
      };
    case actions.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
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
