export const loadCategory = () => {
    return {
      type: 'LOAD_CATEGORY',
    };
  };
  
  export const handleCategory = (category) => {
    return {
      type: 'SELECT_CATEGORY',
      payload: category,
    };
  };
  
  export const addToCart = (product) => {
    return {
      type: 'ADD_PRODUCT',
      payload: product,
    };
  };
  
  export const removeFromCart = (id) => {
    return {
      type: 'REMOVE_PRODUCT',
      payload: id,
    };
  };