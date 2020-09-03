import React from "react";
import "./App.css";
import Routes from "./Routes";
import CartDisplay from "./CartDisplay";

function App() {
	return (
		<div className="App">
			<CartDisplay />
			<Routes />
		</div>
	);
}

export default App;
