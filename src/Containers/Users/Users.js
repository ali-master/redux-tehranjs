import React from "react"
import {connect} from "react-redux";
import Root from "Root";
import propTypes from "prop-types";
import request from "superagent";

import {Icon, Table, Message, Button} from "semantic-ui-react";

// Actions
import {getArticles} from "Actions/Articles";
import {addArticles} from "Actions/Articles";

// utils Components
import UsersTable from "./Utils/Users";

// utilities
import {toFa} from "Utilities";
import moment from "moment-jalali";

class Users extends React.Component {
	static contextTypes = {
		store: propTypes.object
	}
	constructor(props, context) {
		super(props, context)

		this.store = this.context.store;
	}
	componentWillMount() {
		this.handleStore = () => this.store.subscribe(() => {
			this.forceUpdate();
		});
	}
	componentDidMount() {
		this.handleStore()
	}
	renderUsersTable({fname, lname, email, age, country}, index) {
		return (
			<Table.Row key={index} textAlign="center">
				<Table.Cell>#{toFa(index + 1)}</Table.Cell>
				<Table.Cell>{fname}</Table.Cell>
				<Table.Cell>{lname}</Table.Cell>
				<Table.Cell>{email}</Table.Cell>
				<Table.Cell>{toFa(age)} سال</Table.Cell>
				<Table.Cell>{toFa(country)}</Table.Cell>
			</Table.Row>
		)
	}
	render() {
		let {users} = this.props;

		return (
			<Root header="کاربران" content="نمایش لیست تمامی کاربران" icon="users">
				<UsersTable items={users} handler={this.rendeUseresTable} />
			</Root>
		)
	}

}
function mapStateToProps(state) {
	return {
		users: state.users || []
	}
}

function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
