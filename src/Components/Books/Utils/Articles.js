import React from "react";

// import components
import {Table} from "semantic-ui-react";

const Articles = (props) => (
	<Table celled definition fixed striped selectable textAlign="center">
		<Table.Header className="titles">
			<Table.Row>
				<Table.HeaderCell width={1} />
				<Table.HeaderCell>عنوان</Table.HeaderCell>
				<Table.HeaderCell>نویسنده</Table.HeaderCell>
				<Table.HeaderCell>تاریخ انتشار</Table.HeaderCell>
				<Table.HeaderCell>رتبه کتاب</Table.HeaderCell>
				<Table.HeaderCell>قیمت</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			{props.items.map(::props.handler)}
		</Table.Body>
	</Table>
)

export default Articles;
