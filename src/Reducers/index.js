import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";

import balance from "./balance";
import articles from "./articles";

export default combineReducers({
	balance,
	articles,

	routing,
})
