import { AnyAction, Dispatch } from "redux";
import { fetchPopular, fetchFromGenre } from "../fetchData";
import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from "../constants";

export type IwhichData =
  | "popular_movies"
  | "popular_series"
  | "family_movies"
  | "documentaries";

export function saveSomeData(whichData: IwhichData) {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch({
      type: FETCH_BEGIN,
      payload: {
        id: whichData
      }
    });
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
          response = await fetchFromGenre("family");
          break;
        }
        case "documentaries": {
          response = await fetchFromGenre("documentary");
          break;
        }
        default: {
          throw new Error("Some weird shit just happened.");
        }
      }

      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          id: whichData,
          data: response
        }
      });
    } catch (error) {
      console.log("error");
      console.log(error);
      dispatch({
        type: FETCH_FAILURE,
        payload: {
          id: whichData,
          error: error.response
        }
      });
    }
  };
}
