import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartDisplay.css";

const Cart = () => {
	const cart = useSelector((state) => state.cart);

	const displayItems = Object.keys(cart).map((id) => {
		let item = cart[id];
		return { totalPrice: item.qty * item.price, qty: item.qty };
		// return item.qty * item.price;
	});

	let numItems = 0;
	let totalPrice = 0;
	if (Object.entries(displayItems).length > 0) {
		numItems = displayItems
			.map((item) => item.qty)
			.reduce((acc, curr) => acc + curr);
		totalPrice = displayItems
			.map((item) => item.totalPrice)
			.reduce((acc, curr) => acc + curr);
	}

	return (
		<div className="CartDisplay">
			<p>
				<Link to="/">Home</Link>
				<Link to="/cart">Cart</Link>
			</p>
			<p>Cart Items: {numItems}</p>
			<p>
				Cart Total Price: $
				{totalPrice.toLocaleString({
					style: "currency",
					currency: "USA",
				})}
			</p>
			<hr />
		</div>
	);
};

export default Cart;
