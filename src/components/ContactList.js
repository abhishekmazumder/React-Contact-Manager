import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'John Doe',
				email: 'jdoe@gmail.com',
				phone: 9863254145,
			},
			{
				id: 2,
				name: 'Alif Laila',
				email: 'aliflaila@gmail.com',
				phone: 9863257869,
			},
			{
				id: 3,
				name: 'Peter Parker',
				email: 'parkerp@hotmail.com',
				phone: 9863253276,
			},
		],
	};
	render() {
		const { contacts } = this.state;
		return (
			<div>
				{contacts.map((contact) => (
					<Contact
						key={contact.id}
						contact={contact}
					/>
				))}
			</div>
		);
	}
}

export default ContactList;
