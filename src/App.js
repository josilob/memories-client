import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {
	return (
		<BrowserRouter>
			<Container maxwidt='lg'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/auth' component={Auth} />
				</Switch>
				<Home />
			</Container>
		</BrowserRouter>
	);
};

export default App;
