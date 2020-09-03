import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Item from "./Item";
import "./ItemList.css";

const ItemList = () => {
	const inventory = useSelector(
		(state) => state.inventory.products,
		shallowEqual
	);

	const displayItems = Object.keys(inventory).map((id) => {
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

	return <div className="ItemList">{displayItems}</div>;
};

export default ItemList;
