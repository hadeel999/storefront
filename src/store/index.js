import { createStore, combineReducers, applyMiddleware } from 'redux';
import products from './reducers/products';
import categories from './reducers/categories';
import cart from './reducers/cart';
import activeProduct from './reducers/activeProduct';
import thunk from 'redux-thunk';

const reducers = combineReducers({ products, categories, cart, activeProduct });

export default createStore(reducers, applyMiddleware(thunk));