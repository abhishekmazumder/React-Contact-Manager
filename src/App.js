import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header';
import AddContact from './components/AddContact'
import ContactList from './components/ContactList';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="app">
						<Header branding="Contact Manager" />
						<div className="container">
							<Switch>
								<Route exact path="/" component={ContactList} />
								<Route
									exact
									path="/contact/add"
									component={AddContact}
								/>
								<Route exact path="/about" component={About} />
								<Route component={NotFound}/>
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
