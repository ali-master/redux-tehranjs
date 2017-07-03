import React, {cloneElement, Component} from "react";
import ReactCSSTransitionGroup from "react/lib/ReactCSSTransitionGroup";

// import components
import Menu from "./Menu";

// import Styles and Segment Components
import {Container, Grid} from "semantic-ui-react";

class App extends Component {
	render() {
		const {children} = this.props;

		return (
			<div className="root-wrap">
				<Grid stretched className="app-grid" relaxed stackable>
					<Grid.Column className="content-section" mobile={15} tablet={13} computer={16} largeScreen={16}>
						<Menu />
						<Container className="content-wrapper">
							<ReactCSSTransitionGroup component="div" transitionName="router-animate" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
								{
									cloneElement(children, {
										key: window.location.pathname
									})
								}
							</ReactCSSTransitionGroup>

						</Container>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default App;
