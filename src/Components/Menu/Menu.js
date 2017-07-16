import React, {Component} from "react";
import {browserHistory, Link} from "react-router";
import {connect} from "react-redux";


// import semantic-ui-react components
import {Menu, Dropdown, Button, Icon} from "semantic-ui-react";

// import utilities
import {toFa} from "Utilities";

class FixedMenu extends Component {
	render() {
		let {balance} = this.props;

		return (
			<Menu size="tiny" pointing stackable style={{direction: "ltr", margin: "0 20px", maxHeight: 50}}>
				<Menu.Menu
					<Dropdown item text="کوشا ساعی عزیز" className="username-dropdown-text">
						<Dropdown.Menu>
							<Dropdown.Item icon="settings" text="تنظیمات" onClick={(e) => {browserHistory.push("/settings")}} />
						</Dropdown.Menu>
					</Dropdown>
					<Menu.Item style={{direction: "rtl"}} className="iransans">
						اعتبار: <span className="credit-number">{toFa(balance)}</span> ریال
					</Menu.Item>
					<Menu.Item>
						<Link to="Users" className="iransans">لیست کاربران</Link>
					</Menu.Item>
				</Menu.Menu>
				<Menu.Item position="right">
					<Button content="خروج از حساب کاربری" icon="power" labelPosition="right" color="google plus" />
				</Menu.Item>
			</Menu>
		)
	}
}

function mapStateToProps(state) {
	return {
		balance: state.balance
	}
}

export default connect(mapStateToProps, null)(FixedMenu);
