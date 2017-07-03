import React, {Component} from "react";
import PropTypes from "prop-types";
import {Segment, Message, Header, Icon} from "semantic-ui-react";

class Root extends Component {
	static propTypes = {
		as: PropTypes.string,
		pip: PropTypes.string,
		prefix: PropTypes.string,
		icon: PropTypes.string.isRequired,
		header: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		className: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	}
	static defaultProps = {
		as: "h2",
		pip: "|",
		prefix: "Tehranjs",
	}
	componentDidMount() {
		const {prefix, pip, header} = this.props;

		document.title = [prefix, pip, header].join(" ");
	}
	render() {
		const {header, icon, content, className, children, as, color, loading} = this.props;

		return (
			<div className={["wrap", className].join(" ")}>
				<Header as={as} dividing className="iransans">
					<Icon className="page-header-icon" name={icon} />  {header}
				</Header>
				<Message attached content={content} color={color} />
				<Segment attached loading={loading}>
					{children}
				</Segment>
			</div>
		)
	}
}

export default Root;
