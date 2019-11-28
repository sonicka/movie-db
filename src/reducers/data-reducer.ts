import * as actions from "../constants";

interface IEntityData {
  loading: boolean;
  error?: any;
  id: string;
  entities?: {};
}

interface IInitialState {}

const initialState: IInitialState = {};

export const dataReducer = (
  state: IInitialState = initialState,
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
