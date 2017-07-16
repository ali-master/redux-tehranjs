import React from "react";

// import components
import {Table} from "semantic-ui-react";

const Users = ({handler: Handler, items}) => (
	items.length > 0 && (
		<Table celled definition fixed striped selectable textAlign="center">
			<Table.Header className="titles">
				<Table.Row>
					<Table.HeaderCell width={1} />
					<Table.HeaderCell>نام</Table.HeaderCell>
					<Table.HeaderCell>نام خانوادگی</Table.HeaderCell>
					<Table.HeaderCell>ایمیل</Table.HeaderCell>
					<Table.HeaderCell>شماره همراه</Table.HeaderCell>
					<Table.HeaderCell>شهر</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{items.map(Handler)}
			</Table.Body>
		</Table>
	)
)

export default Users;
