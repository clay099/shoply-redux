import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";
const INITIAL_STATE = {};

export default function cart(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				[action.id]: { qty: action.qty, price: action.price },
			};
		case REMOVE_ITEM:
			return {
				...state,
				[action.id]: { ...state[action.id], qty: 0 },
			};
		default:
			return state;
	}
}
