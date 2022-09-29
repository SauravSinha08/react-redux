import counterReducers from "./Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducers
});

export default rootReducer;