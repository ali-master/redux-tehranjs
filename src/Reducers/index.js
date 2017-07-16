import {combineReducers} from "redux";

import balance from "./balance";
import articles from "./articles";

export default combineReducers({
	balance,
	articles,
})
