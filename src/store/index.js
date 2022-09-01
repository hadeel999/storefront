import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './products';

const store = () => {
  return createStore(productReducer, composeWithDevTools());
};

export default store();