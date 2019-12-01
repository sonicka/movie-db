import { AnyAction, Dispatch } from "redux";
import { searchMovies } from "../fetchData";
import {
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  CLEAR_SEARCH
} from "../constants";

/** Action that sets search as running */
export function startSearch() {
  return (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
      type: SEARCH_BEGIN
    });
  };
}

/** Action that saves search query and data to Redux store */
export function search(query: string) {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    if (query.length > 0) {
      try {
        let response: any = await searchMovies(query);
        dispatch({
          type: SEARCH_SUCCESS,
          payload: {
            query: query,
            results: response.filter((r: any) => r.media_type !== "person")
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

/** Action that clears search data from Redux store */
export function clearSearch() {
  return (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
      type: CLEAR_SEARCH
    });
  };
}
