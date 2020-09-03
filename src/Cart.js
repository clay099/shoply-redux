import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./ItemList.css";
import "./Cart.css";

const Cart = () => {
	const { inventory, cart } = useSelector((state) => ({
		inventory: state.inventory.products,
		cart: state.cart,
	}));
	// get all ids from cart and save in array
	const cartIDs = Object.keys(cart);

	// content to display. get all inventory ids
	let displayList = Object.keys(inventory)
		// checks inventory id against card ids
		.filter((id) => cartIDs.includes(id) && cart[id].qty > 0)
		// for all matched ids create a item
		.map((id) => {
			let item = inventory[id];
			return (
				<Item
					key={id}
					id={id}
					description={item.description}
					image_url={item.image_url}
					name={item.name}
					price={item.price}
				/>
			);
		});

	if (Object.entries(displayList).length === 0) {
		displayList = <p>Add to cart</p>;
	}

	return <div className="CartList">{displayList}</div>;
};

export default Cart;
