import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ItemList from "./ItemList";
import Cart from "./Cart";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/cart">
				<Cart />
			</Route>
			<Route exact path="/">
				<ItemList />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
