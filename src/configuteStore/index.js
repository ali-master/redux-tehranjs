import {createStore, applyMiddleware} from "redux";
import {browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

import RootReducer from "../Reducers";
import api from "./apiMdl";

const store = createStore(RootReducer, {}, applyMiddleware(api));
const history = syncHistoryWithStore(browserHistory, store)

export default store;
export {
	history
}
