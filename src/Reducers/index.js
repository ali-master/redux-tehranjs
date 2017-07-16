import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";

import balance from "./balance";
import articles from "./articles";
import users from "./users";

export default combineReducers({
	balance,
	articles,
	users,

	routing,
})
