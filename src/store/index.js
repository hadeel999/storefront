import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './reducers/products';
import categories from './reducers/categories';
import cart from './reducers/cart';

const reducers = combineReducers({ products, categories, cart });

export default createStore(reducers, composeWithDevTools());