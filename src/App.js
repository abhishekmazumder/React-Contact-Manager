import React, { Component } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

class App extends Component {
	render() {
		return (
			<Provider>
				<div>
					<Header branding="Contact Manager" />
					<div className="container">
						<ContactList />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
