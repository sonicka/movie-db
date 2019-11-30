import { AnyAction, Dispatch } from "redux";
import { fetchDetail } from "../fetchData";
import {
  FETCH_DETAIL_BEGIN,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAILURE,
  REMOVE_DETAIL,
  CategoryType
} from "../constants";

/** Action that saves fetched detail of given movie/tv show to Redux store */
export function saveDetail(type: CategoryType, id: number) {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch({
      type: FETCH_DETAIL_BEGIN,
      payload: {
        id: id
      }
    });
    try {
      let response: any = await fetchDetail(type, id);

      dispatch({
        type: FETCH_DETAIL_SUCCESS,
        payload: {
          id: id,
          categorydd: type,
          data: response
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_DETAIL_FAILURE,
        payload: {
          id: id,
          error: error.response
        }
      });
    }
  };
}

/** Action that clears detail data from Redux store */
export function removeDetail() {
  return (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
      type: REMOVE_DETAIL
    });
  };
}
