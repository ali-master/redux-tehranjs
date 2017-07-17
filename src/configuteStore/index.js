import {createStore, applyMiddleware, compose} from "redux";
import {browserHistory} from "react-router";
import thunk from "redux-thunk";
import {syncHistoryWithStore} from "react-router-redux";

import RootReducer from "../Reducers";
import api from "./apiMdl";

const store = createStore(RootReducer, {}, compose(applyMiddleware(thunk, api), window.devToolsExtension && window.devToolsExtension()));
const history = syncHistoryWithStore(browserHistory, store)

export default store;
export {
	history
}
