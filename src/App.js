import React from "react";
import "./App.css";
import ItemList from "./ItemList";
import Cart from "./Cart";

function App() {
	return (
		<div className="App">
			<Cart />
			<ItemList />
		</div>
	);
}

export default App;
