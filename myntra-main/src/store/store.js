import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { Registerreducer } from "../redux/Register/reducer";
import { bagReducer } from "../redux/Cart/reducer";
import {Homereducer} from "../redux/Home/reducer"

const rootreducer = combineReducers({
  bag: bagReducer,
  register: Registerreducer,
  home: Homereducer,
});

export const store = createStore(rootreducer, compose(applyMiddleware(thunk)));
