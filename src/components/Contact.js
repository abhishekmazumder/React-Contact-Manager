import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends Component {
	state = {
		showInfo: false,
	};

	onShowClick = (e) => {
		this.setState({
			showInfo: !this.state.showInfo,
		});
	};

	handleDelete = (id, dispatch) => {
		dispatch({
			type: 'DELETE_CONTACT',
			payload: id,
		});
	};

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showInfo } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-3">
							<h4>
								{name}{' '}
								<i
									className="fas fa-sort-down"
									onClick={this.onShowClick}
									style={{ cursor: 'pointer' }}
								></i>
								<i
									className="fas fa-times"
									onClick={()=>this.handleDelete(id,dispatch)} //You can implement delete funtionality this way or below mention way
									
									// onClick={this.handleDelete.bind(
									// 	this,
									// 	id,
									// 	dispatch
									// )}
									style={{
										cursor: 'pointer',
										float: 'right',
										color: 'red',
									}}
								></i>
							</h4>
							{showInfo ? (
								<ul className="list-group">
									<li className="list-group-item">
										Email: {email}
									</li>
									<li className="list-group-item">
										Phone: {phone}
									</li>
								</ul>
							) : null}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default Contact;
