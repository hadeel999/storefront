const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ADD_PRODUCT':
      return [...state, payload];
    case 'REMOVE_PRODUCT':
      return state.filter((p) => p._id !== payload);
    default:
      return state;
  }
};

export default cartReducer;