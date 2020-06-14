import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
	state = {
		showInfo: false,
	};

	onShowClick = (e) => {
		this.setState({
			showInfo: !this.state.showInfo,
		});
	};

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showInfo } = this.state;
		const { handleDelete } = this.props;
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
						onClick={() => handleDelete(id)}
						style={{
							cursor: 'pointer',
							float: 'right',
							color: 'red',
						}}
					></i>
				</h4>
				{showInfo ? (
					<ul className="list-group">
						<li className="list-group-item">Email: {email}</li>
						<li className="list-group-item">Phone: {phone}</li>
					</ul>
				) : null}
			</div>
		);
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default Contact;
