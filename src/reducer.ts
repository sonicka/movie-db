import * as actions from "./dataActions";

interface IEntityData {
  loading: boolean;
  error?: any;
  id: string;
  entities?: {};
}

interface IInitialState {}

const initialState: IInitialState = {
  //loading: false,
  //[name as any]: { loading: false }
};

// const initialState: IInitialState = {
//   loading: false,
//   fetchedData: {
//     documentaries: {
//       entities: []
//     },
//     family_movies: {
//       entities: []
//     }
//   }
// };

export const dataReducer = (
  state: IInitialState = initialState,
  action: any
) => {
  console.log("action");
  console.log(action);
  switch (action.type) {
    case actions.FETCH_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        [action.payload.id]: {
          loading: true
          //error: null,
        }
        //error: null
      };
    //   return {
    //     ...state,
    //     fetchedData: {
    //       ...state.fetchedData,
    //       [action.payload.id]: {
    //         loading: true
    //         //error: null,
    //       }
    //     }
    //     //error: null
    //   };
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        // data: { ...state.data, [action.payload.id]: action.payload.data },
        [action.payload.id]: {
          entities: action.payload.data,
          //error: null,
          loading: false
        }
      };
    case actions.FETCH_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      console.log("action error");
      console.log(action.payload);
      return {
        ...state,
        [action.payload.id]: {
          error: action.payload.error,
          loading: false
        }
      };

    default:
      // ALWAYS have a default case in a reducer
      console.log("default");
      return state;
  }
};

// export const detailsReducer
// export const searchReducer

export const getData = (state: any) => state.data;
export const getDataLoading = (state: any) => state.loading;
