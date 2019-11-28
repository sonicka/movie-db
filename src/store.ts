import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { dataReducer } from "./reducers/data-reducer";
import { detailReducer } from "./reducers/detail-reducer";
import { searchReducer } from "./reducers/search-reducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  detail: detailReducer,
  search: searchReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
