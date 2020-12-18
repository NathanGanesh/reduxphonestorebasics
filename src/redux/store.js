import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
const middlewares = [ thunk ];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
