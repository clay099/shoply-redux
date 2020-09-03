import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export const addItem = (id, qty, price) => ({ type: ADD_ITEM, id, qty, price });
export const removeItem = (id) => ({ type: REMOVE_ITEM, id });
