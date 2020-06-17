import React, { Component } from 'react';
import { Consumer } from '../context';
import TextInputGroup from './layout/TextInputGroup';
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: { name: 'Name is required', email: 'Email is required' },
	};

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = (dispatch, e) => {
		e.preventDefault();
		const { name, email, phone } = this.state;

		//check for errors in form validation
		if (name === '') {
			this.setState({ errors: { name: 'Name is required' } });
			return;
		}
		if (email === '') {
			this.setState({ errors: { email: 'Email is required' } });
			return;
		}

		const newContact = {
			id: uuidv4(),
			name,
			email,
			phone,
		};
		dispatch({
			type: 'ADD_CONTACT',
			payload: newContact,
		});
		
		// clear state/input field after adding the contact
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {},
		});

		//redirecting to the Home/ContactList after adding the contact
		this.props.history.push('/');
	};

	render() {
		const { name, email, phone, errors } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="card mb-3">
							<div className="card-header">Add Contact</div>
							<div className="card-body">
								<form
									onSubmit={this.handleSubmit.bind(
										this,
										dispatch
									)}
								>
									<TextInputGroup
										label="Name"
										name="name"
										placeholder="Enter Name"
										value={name}
										onChange={this.handleChange}
										error={errors.name}
									/>
									<TextInputGroup
										label="Email"
										name="email"
										type="email"
										placeholder="Enter Email"
										value={email}
										onChange={this.handleChange}
										error={errors.email}
									/>
									<TextInputGroup
										label="Phone"
										name="phone"
										placeholder="Enter Phone"
										value={phone}
										onChange={this.handleChange}
									/>

									<input
										type="submit"
										value="Add Contact"
										className="btn btn-light btn-block"
									/>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
export default AddContact;
