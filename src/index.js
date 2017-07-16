import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Store, {history} from "./configuteStore";

// Presentational Components
import App from "Components/App";
import NotFound from "Components/NotFound";

// Containers
import Books from "Containers/Books";
import Users from "Containers/Users";

// import redux and router
import {Router, Route, IndexRoute, Redirect} from "react-router";

// styles
import "semantic-ui-css/semantic.min.css";
import "Styles/style.css";

const router = (
	<Provider store={Store}>
		<Router history={history}>
			<Route component={App}>
				<Route path="/">
					<IndexRoute component={Books} />
					<Route path="users" component={Users} />
				</Route>
				<Route path="*" name="Not Found!" component={NotFound} />
			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(router, document.getElementById("root"));
