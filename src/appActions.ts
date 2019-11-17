import { AnyAction, Dispatch } from "redux";
import { fetchPopular, fetchFromCategory } from "./fetchData";
export const FETCH_BEGIN = "FETCH_BEGIN";
export const FETCH_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
// export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

export const FOO = "FOO";
export const SAVE_SOME_DATA = "SAVE_SOME_DATA";
export const SAVE_SOME_MORE_DATA = "SAVE_SOME_MORE_DATA";

type IwhichData =
  | "popular_movies"
  | "popular_series"
  | "family_movies"
  | "documentaries";

export function saveSomeData(whichData: IwhichData) {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch({ type: FETCH_BEGIN });
    try {
      let response: any;

      switch (whichData) {
        case "popular_movies": {
          response = await fetchPopular("movie");
          break;
        }
        case "popular_series": {
          response = await fetchPopular("tv");
          break;
        }
        case "family_movies": {
          response = await fetchFromCategory("family");
          break;
        }
        case "documentaries": {
          response = await fetchFromCategory("documentary");
          break;
        }
        default: {
          throw new Error("Some weird shit just happened.");
        }
      }

      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          [whichData]: response // todo
        }
      });
    } catch (error) {
      dispatch({ type: FETCH_FAILURE });
    }
  };
}

export function foo() {
  return {
    type: FOO
  };
}

export const fetchBegin = () => ({
  type: FETCH_BEGIN
});

export const fetchDataSuccess = (data: any) => ({
  type: FETCH_SUCCESS,
  payload: { data }
});

export const fetchFailure = (error: any) => ({
  type: FETCH_FAILURE,
  payload: { error }
});

// export const searchSuccess = (data: any) => ({
//   type: SEARCH_SUCCESS,
//   payload: { search: data }
// });
