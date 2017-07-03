import {createStore, applyMiddleware} from "redux";

import RootReducer from "../Reducers";
import api from "./apiMdl";

const store = createStore(RootReducer, {}, applyMiddleware(api));

export default store;
