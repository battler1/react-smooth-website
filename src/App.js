import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signin" component={SignIn} />
			</Switch>
		</Router>
	);
}

export default App;
