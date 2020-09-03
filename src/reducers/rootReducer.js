import { combineReducers } from "redux";
import cart from "./cart";
import inventory from "./inventory";

const rootReducer = combineReducers({ cart, inventory });

export default rootReducer;
