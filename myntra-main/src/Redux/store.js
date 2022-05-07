import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
  combineReducers,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./RegisterLogin/reducer";
import { bagReducer } from "../Redux/Cart/reducer";

const rootreducer = combineReducers({
  bag: bagReducer,
});


export const store = createStore(rootreducer, compose(applyMiddleware(thunk)));
