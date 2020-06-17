import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ branding }) => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
			<div className="container">
				<a href="/" className="navbar-brand">
					{branding}
				</a>
				<div>
					<ul className="mr-auto navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								<i className="fas fa-home mr-1" />
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact/add" className="nav-link">
								<i className="fas fa-plus mr-1" />
								Add Contact
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								<i className="fas fa-question mr-1" />
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Header.defaultProps = {
	branding: 'My App',
};

Header.propTypes = {
	branding: PropTypes.string.isRequired,
};

export default Header;
