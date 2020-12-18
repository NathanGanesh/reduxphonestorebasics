import { combineReducers } from 'redux';
import { shopReducer } from './shop/shopReducer';
import { randomReducer } from './shop/shopReducer';

const rootReducer = combineReducers({
	shop: shopReducer
});
export default rootReducer;
