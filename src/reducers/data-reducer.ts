import * as actions from "../constants";

/** Type of Data state */
interface IDataState {
  [c: string]: IEntityData;
}

/** Type of entities saved in Data state */
interface IEntityData {
  loading: boolean;
  error?: any;
  id: string;
  entities?: {};
}

/** Initial state of Data */
const initialDataState: { [c: string]: IEntityData } = {};

/** Reducer for Data actions */
export const dataReducer = (
  state: IDataState = initialDataState,
  action: any
) => {
  switch (action.type) {
    case actions.FETCH_BEGIN:
      return {
        ...state,
        [action.payload.id]: {
          loading: true
        }
      };
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          entities: action.payload.data,
          loading: false
        }
      };
    case actions.FETCH_FAILURE:
      return {
        ...state,
        [action.payload.id]: {
          error: action.payload.error,
          loading: false
        }
      };
    default:
      return state;
  }
};
