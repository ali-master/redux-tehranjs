import React from "react";
import ReactDOM from "react-dom";
import {browserHistory} from "react-router";
import Store from "./configuteStore";
import {Provider} from "react-redux";

// Presentational Components
import App from "Components/App";
import NotFound from "Components/NotFound";
import Books from "Components/Books";

// import redux and router
import {Router, Route, IndexRoute, Redirect} from "react-router";

// styles
import "semantic-ui-css/semantic.min.css";
import "Styles/style.css";

const router = (
	<Provider store={Store}>
		<Router history={browserHistory}>
			<Route component={App}>
				<Route path="/" component={Books} />
				<Route path="*" name="Not Found!" component={NotFound} />
			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(router, document.getElementById("root"));

Store.subscribe(() => {
	console.log(Store.getState())
})
