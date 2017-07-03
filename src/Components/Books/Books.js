import React from "react"
import {Icon, Table, Message, Button} from "semantic-ui-react";
import {connect} from "react-redux";
import Root from "Root";
import propTypes from "prop-types";

import {balanceAction, DesrementBalance} from "../../Actions/balance";

class Books extends React.Component {
	static propTypes = {
		store: propTypes.object
	}
	constructor(props, context) {
		super(props, context)
	}
	render() {
		console.log(this)
		let {value} = this.props;
		return (
			<Root header="کتاب ها" content="نمایش لیست تمامی کتاب ها" icon="browser">
				<Message info content={value} />
				<Button positive content="add balance" icon="plus" labelPosition="right" onClick={() => {this.props.addCounter(50)}} />
				<Button negative content="desrement balance" icon="minus" labelPosition="right" onClick={() => {this.props.DesrementBalance(10)}} />
				<Table celled striped selectable className="dir-ltr">
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell colSpan="3">Git Repository</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell collapsing>
								<Icon name="folder" /> node_modules
							</Table.Cell>
							<Table.Cell>Initial commit</Table.Cell>
							<Table.Cell collapsing textAlign="right">10 hours ago</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="folder" /> test
							</Table.Cell>
							<Table.Cell>Initial commit</Table.Cell>
							<Table.Cell textAlign="right">10 hours ago</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="folder" /> build
							</Table.Cell>
							<Table.Cell>Initial commit</Table.Cell>
							<Table.Cell textAlign="right">10 hours ago</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="file outline" /> package.json
							</Table.Cell>
							<Table.Cell>Initial commit</Table.Cell>
							<Table.Cell textAlign="right">10 hours ago</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="file outline" /> Gruntfile.js
							</Table.Cell>
							<Table.Cell>Initial commit</Table.Cell>
							<Table.Cell textAlign="right">10 hours ago</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</Root>
		)
	}

}
function mapStateToProps(state) {
	return {
		value: state.balance
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addCounter(value) {
			dispatch(balanceAction(value))
		},
		DesrementBalance(value) {
			dispatch(DesrementBalance(value))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
