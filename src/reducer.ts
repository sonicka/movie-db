import * as actions from "./appActions";

const initialState = {
  // loading: false,
  // error: null,
  foobar: false
};

export const dataReducer = (state = initialState, action: any) => {
  console.log("action");
  console.log(action);
  switch (action.type) {
    case actions.FOO:
      return {
        //...state,
        foobar: true
      };
    case actions.FETCH_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case actions.FETCH_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      // ALWAYS have a default case in a reducer
      console.log("gere");
      return state;
  }
};

// export const detailsReducer
// export const searchReducer

export const getState = (state: any) => state; // todo get state!
export const getData = (state: any) => state.data;
export const getDataLoading = (state: any) => state.loading;
export const getError = (state: any) => state.error;
