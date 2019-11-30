import { AnyAction, Dispatch } from "redux";
import { fetchPopular, fetchFromGenre } from "../fetchData";
import {
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  Category,
  MovieGroups,
  DataType
} from "../constants";

/** Action that saves fetched data from given movie category to Redux store */
export function saveData(dataType: DataType) {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch({
      type: FETCH_BEGIN,
      payload: {
        id: dataType
      }
    });
    try {
      let response: any;
      switch (dataType) {
        case MovieGroups.POPULAR_MOVIES: {
          response = await fetchPopular(Category.MOVIE);
          break;
        }
        case MovieGroups.POPULAR_SERIES: {
          response = await fetchPopular(Category.TV);
          break;
        }
        case MovieGroups.FAMILY_MOVIES:
        case MovieGroups.DOCUMENTARIES: {
          response = await fetchFromGenre(dataType);
          break;
        }
        default: {
          throw new Error("Unknown category of movies requested!");
        }
      }
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          id: dataType,
          data: response
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_FAILURE,
        payload: {
          id: dataType,
          error: error
        }
      });
    }
  };
}
