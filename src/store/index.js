import { createStore, combineReducers, applyMiddleware } from 'redux';
import products from './reducers/products';
import categories from './reducers/categories';
import cart from './reducers/cart';
import thunk from 'redux-thunk';

const reducers = combineReducers({ products, categories, cart });

export default createStore(reducers, applyMiddleware(thunk));
