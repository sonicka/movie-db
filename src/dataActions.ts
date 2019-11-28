import { AnyAction, Dispatch } from "redux";
import { fetchPopular, fetchFromGenre } from "./fetchData";
export const FETCH_BEGIN = "FETCH_BEGIN";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export type IwhichData =
  | "popular_movies"
  | "popular_series"
  | "family_movies"
  | "documentaries";

// make array from whichData
export function saveSomeData(whichData: IwhichData) {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch({
      type: FETCH_BEGIN,
      payload: {
        id: whichData
      }
    });
    // let payload to FINISHED action
    try {
      let response: any;
      // iterate thru which data and do this for all elems
      // each response appent to payload variable
      // in the end dispatch the FINISHED action and save all fetched data to store
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
