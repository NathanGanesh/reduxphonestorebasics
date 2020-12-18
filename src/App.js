import './App.css';
import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Error from './pages/Error';
import SingleProduct from './components/SingleProduct';

export default class App extends PureComponent {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/product/:id" component={SingleProduct} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}
