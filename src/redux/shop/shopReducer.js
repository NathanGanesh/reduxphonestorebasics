import Items from './Items';
const INITIAL_STATE = {
	shopItems: Items,
	shopItem: null
};

export const shopReducer = (state = INITIAL_STATE, action) => {
	if (action.type === 'PRODUCT_SELECTED') {
		return { ...state, shopItem: action.payload };
	}
	return state;
};
