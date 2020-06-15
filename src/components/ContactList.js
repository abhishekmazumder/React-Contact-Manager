import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../context';

class ContactList extends Component {
	

	handleDelete = (id) => {
		const filtereditem = this.state.contacts.filter(
			(item) => item.id !== id
		);
		this.setState({
			contacts: filtereditem,
		});
	};

	render() {
		// const { contacts } = value;
		return(
			<Consumer>
				{value=>{
					return (
						<React.Fragment>
							{value.contacts.map((contact) => (
								<Contact
									key={contact.id}
									contact={contact}
									handleDelete={this.handleDelete}
								/>
							))}
						</React.Fragment>
					);
				}}
			</Consumer>
		)
	}
}

export default ContactList;
