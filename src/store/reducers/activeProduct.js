const initialState = {};

const activeProductReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ADD_ACTIVE_PRODUCT':
      return payload;
    default:
      return state;
  }
};

export default activeProductReducer;