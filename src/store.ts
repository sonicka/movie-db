import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { dataReducer } from "./reducer";
import { detailReducer } from "./detail-reducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  detail: detailReducer,
  search: searchReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
