import React from 'react';

// import components
import Root from "Root";
import {Segment, Message} from 'semantic-ui-react';

const NotFound = () => (
	<Root header="یافت نشد" content="یافت نشد" icon="frown">
		<Segment>
			<Message warning content="صفحه مورد نظر یافت نشد، لطفا ابتدا از صحت آدرس اطمینال حاصل فرمایید" />
		</Segment>
	</Root>
)
export default NotFound;
