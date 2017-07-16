import React from "react"
import {connect} from "react-redux";
import Root from "Root";
import propTypes from "prop-types";
import request from "superagent";

import {Icon, Table, Message, Button} from "semantic-ui-react";
import {balanceAction, DesrementBalance} from "../../Actions/balance";

// utils Components
import Articles from "./Utils/Articles";

// utilities
import {toFa} from "Utilities";
import moment from "moment-jalali";

class Books extends React.Component {
	static contextTypes = {
		store: propTypes.object
	}
	state = {
		items: []
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

		this.getArticles().then(articles => {
			this.setState({
				items: [...this.state.items, ...articles]
			})
		});
	}
	getArticles() {
		return new Promise((resolve, reject) => {
			request
			.get('http://596b0bcb14023a0011bcb5eb.mockapi.io/redux/articles')
			.set('Accept', 'application/json')
			.end((err, res) =>{
				err && reject(err);
				resolve(res.body);
			});
		});
	}
	renderArticlesTable({title, author, createdAt, rate, price}, index) {
		return (
			<Table.Row key={index} textAlign="center">
				<Table.Cell>#{toFa(index + 1)}</Table.Cell>
				<Table.Cell>{title}</Table.Cell>
				<Table.Cell>{author}</Table.Cell>
				<Table.Cell>{toFa(moment(createdAt).format("jYYYY/jM/jD HH:MM"))}</Table.Cell>
				<Table.Cell>{toFa(rate)}</Table.Cell>
				<Table.Cell>{toFa(price)}</Table.Cell>
			</Table.Row>
		)
	}
	render() {
		let {value} = this.props;
		let {items} = this.state;

		return (
			<Root header="کتاب ها" content="نمایش لیست تمامی کتاب ها" icon="browser">
				<Message info content={value} />
				<Button positive content="add balance" icon="plus" labelPosition="right" onClick={() => {this.props.addCounter(50)}} />
				<Button negative content="desrement balance" icon="minus" labelPosition="right" onClick={() => {this.props.DesrementBalance(10)}} />

				{items.length > 0 && <Articles items={items} handler={this.renderArticlesTable} />}
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
