import { AnyAction, Dispatch } from "redux";
import { searchMovies } from "../fetchData";
import {
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  CLEAR_SEARCH
} from "../constants";

export function search(query: string) {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    if (query.length > 0) {
      dispatch({
        type: SEARCH_BEGIN,
        payload: {
          query: query
        }
      });
      try {
        let response: any = await searchMovies(query);
        dispatch({
          type: SEARCH_SUCCESS,
          payload: {
            results: response
          }
        });
      } catch (error) {
        dispatch({
          type: SEARCH_FAILURE,
          payload: {
            error: error.response
          }
        });
      }
    }
  };
}

export function clearSearch() {
  return (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
      type: CLEAR_SEARCH
    });
  };
}
