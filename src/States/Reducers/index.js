import { combineReducers } from "redux";
import reducer from "./CartReducer";

const reducers = combineReducers({
  Cart: reducer
})

export default reducers