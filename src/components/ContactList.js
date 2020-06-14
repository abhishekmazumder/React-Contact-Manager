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

	handleDelete = (id) => {
		const filtereditem = this.state.contacts.filter(
			(item) => item.id !== id
		);
		this.setState({
			contacts: filtereditem,
		});
	};

	render() {
		const { contacts } = this.state;
		return (
			<React.Fragment>
				{contacts.map((contact) => (
					<Contact
						key={contact.id}
						contact={contact}
						handleDelete={this.handleDelete}
					/>
				))}
			</React.Fragment>
		);
	}
}

export default ContactList;
