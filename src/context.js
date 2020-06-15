import React, { Component } from 'react';
const Context = React.createContext();
const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export class Provider extends Component {
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
		dispatch: (action) => {
			this.setState((state) => reducer(state, action));
		},
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
