import React, { useState } from "react";
import "./Item.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./actions";

export const Item = ({ id, description, image_url, name, price }) => {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	console.log(cart[id]);
	let qty = (cart[id] && cart[id].qty) || 0;
	console.log("qty", qty);

	const INITIAL_STATE = { qty };
	const [inputs, setInputs] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { value, name } = e.target;
		setInputs((inputs) => ({ ...inputs, [name]: +value }));
	};

	const addToCart = () => {
		dispatch(addItem(id, +inputs.qty, +price));
	};

	const removeFromCart = () => {
		dispatch(removeItem(id));
		setInputs(INITIAL_STATE);
	};

	return (
		<div className="Item" id={id}>
			<h3 className="Item-name">{name}</h3>
			<img className="Item-img" src={image_url} alt="display item" />
			<p className="Item-desc">{description}</p>
			<p className="Item-price">
				<strong>${price}</strong>
			</p>
			<div className="Item-add">
				<label htmlFor="qty">Qty:</label>
				<input
					type="number"
					id="qty"
					value={inputs.qty}
					name="qty"
					onChange={handleChange}
					min="0"
				/>
				<button className="Item-addBtn" onClick={addToCart}>
					<strong>Add to cart</strong>
				</button>
			</div>

			<button className="Item-removeBtn" onClick={removeFromCart}>
				<strong>Remove all from cart</strong>
			</button>
		</div>
	);
};

export default Item;
