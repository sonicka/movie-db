import { AnyAction, Dispatch } from "redux";
import { fetchDetail } from "./fetchData";
import { CATEGORY } from "./fetchData";

export const FETCH_DETAIL_BEGIN = "FETCH_DETAIL_BEGIN";
export const FETCH_DETAIL_SUCCESS = "FETCH_DETAIL_SUCCESS";
export const FETCH_DETAIL_FAILURE = "FETCH_DETAIL_FAILURE";
export const REMOVE_DETAIL = "REMOVE_DETAIL";

export function saveDetail(type: CATEGORY, id: number) {
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
          data: response
        }
      });
    } catch (error) {
      console.log("error");
      console.log(error);
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

export function removeDetail() {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch({
      type: REMOVE_DETAIL
    });
  };
}
