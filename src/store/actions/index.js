import axios from 'axios';

export const getCategories = () => {
  return async (dispatch) => {
    const raw = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(loadCategory(raw.data.results));
  };
};

export const loadCategory = (payload) => {
  return {
    type: 'LOAD_CATEGORY',
    payload,
  };
};

export const getProduct = (category) => {
  return async (dispatch) => {
    const raw = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch(handleCategory(category, raw.data.results));
  };
};

export const handleCategory = (category, data) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: {
      category,
      data,
    },
  };
};

export const removeProduct = (product) => {
  return async (dispatch) => {
    await axios.delete(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`);
    dispatch(addToCart(product));
    const raw = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch(handleCategory(product.category, raw.data.results));
  };
};

export const addToCart = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    await axios.post(`https://api-js401.herokuapp.com/api/v1/products/`, product);
    dispatch(removeFromCart(product._id));
    const raw = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch(handleCategory(product.category, raw.data.results));
  };
};

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: id,
  };
};
