const initialState = [];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD_CATEGORY':
      return state;

    case 'SELECT_CATEGORY':
      return payload.data.filter((prod) => prod.category === payload.category);

    default:
      return state;
  }
};

export default productReducer;