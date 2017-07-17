import React from "react"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Root from "Root";
import propTypes from "prop-types";
import request from "superagent";

import {Icon, Table, Message, Button} from "semantic-ui-react";

// Actions
import {addArticles} from "Actions/Articles";
import {deleteArticle} from "Actions/Articles";

// utils Components
import Articles from "./Utils/Articles";

// utilities
import {toFa} from "Utilities";
import moment from "moment-jalali";

class Books extends React.Component {
	static contextTypes = {
		store: propTypes.object,
	}
	constructor(props, context) {
		super(props, context)

		this.store = this.context.store;
	}
	componentDidMount() {
		this.getArticles().then(articles => {
			this.props.addArticles(articles);
		});
	}
	getArticles() {
		return new Promise((resolve, reject) => {
			request.get('http://596b0bcb14023a0011bcb5eb.mockapi.io/redux/articles').set('Accept', 'application/json').end((err, {body}) =>{
				err && reject(err);

				// resolving data
				resolve(body);
			});
		});
	}
	deleteArticle(id, e) {
		e && e.preventDefault();

		this.props.deleteArticle(id);
	}
	renderArticlesTable({id, title, author, createdAt, rate, price}, index) {
		return (
			<Table.Row key={index} textAlign="center">
				<Table.Cell>#{toFa(index + 1)}</Table.Cell>
				<Table.Cell>{title}</Table.Cell>
				<Table.Cell>{author}</Table.Cell>
				<Table.Cell style={{unicodeBidi: "plaintext"}}>{toFa(moment(createdAt).format("jYYYY/jM/jD HH:MM"))}</Table.Cell>
				<Table.Cell>{toFa(rate)}</Table.Cell>
				<Table.Cell>{toFa(price)}</Table.Cell>
				<Table.Cell><Button icon="trash" size="small" onClick={this.deleteArticle.bind(this, id)} labelPosition="right" color="google plus" content="حذف کتاب" /></Table.Cell>
			</Table.Row>
		)
	}
	render() {
		let {articles} = this.props;

		return (
			<Root header="کتاب ها" content="نمایش لیست تمامی کتاب ها" icon="browser">
				<Articles items={articles} handler={::this.renderArticlesTable} />
			</Root>
		)
	}

}
function mapStateToProps(state) {
	return {
		articles: state.articles
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addArticles(arrived) {
			return addArticles(arrived)
		},
		deleteArticle(id) {
			return deleteArticle(id)
		},
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
