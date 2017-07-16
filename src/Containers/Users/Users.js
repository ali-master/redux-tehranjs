import React from "react"
import {connect} from "react-redux";
import propTypes from "prop-types";

import Root from "Root";
import {Icon, Table, Message, Button} from "semantic-ui-react";

// Actions
import {addUser} from "Actions/Users";

// utils Components
import UsersTable from "./Utils/Users";

// utilities
import faker from "faker";
import {toFa} from "Utilities";

class Users extends React.Component {
	static contextTypes = {
		store: propTypes.object
	}
	constructor(props, context) {
		super(props, context)

		this.store = this.context.store;
	}
	renderUsersTable({fname, lname, email, phone, state}, index) {
		return (
			<Table.Row key={index} textAlign="center">
				<Table.Cell>#{toFa(index + 1)}</Table.Cell>
				<Table.Cell>{fname}</Table.Cell>
				<Table.Cell>{lname}</Table.Cell>
				<Table.Cell className="plaintext">{email}</Table.Cell>
				<Table.Cell>{toFa(phone)}</Table.Cell>
				<Table.Cell>{toFa(state)}</Table.Cell>
			</Table.Row>
		)
	}
	createFakeUser() {
		return {
			fname: faker.name.firstName(),
			lname: faker.name.lastName(),
			phone: faker.phone.phoneNumber(),
			email: faker.internet.email(),
			state: faker.address.state(),
		}
	}
	addNewUser(e) {
		e.preventDefault();

		this.appendUsers(1);
	}
	appendUsers(limit) {
		for (let i = 0; i < limit; i++) {
			this.props.addUser(this.createFakeUser())
		}
	}
	componentDidMount() {
		this.appendUsers(10);
	}
	render() {
		let {users} = this.props;

		return (
			<Root header="کاربران" content="نمایش لیست تمامی کاربران" icon="users">
				<Button onClick={::this.addNewUser} positive content="اضافه کردن کاربر جدید" labelPosition="right" icon="add" />
				<UsersTable items={users} handler={this.renderUsersTable} />
			</Root>
		)
	}

}
function mapStateToProps(state) {
	return {
		users: state.users
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addUser(payloads) {
			dispatch(addUser(payloads));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
