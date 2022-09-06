const initialState = {
    activeCategory: '',
    categoryList: [],
  };
  
  const categoryList = [
    {
      id: 1,
      name: 'food',
      description: 'Delicious food for you to feast on',
    },
    {
      id: 2,
      name: 'Technology',
      description: 'Technologies',
    },
  ];
  
  const categoriesReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'LOAD_CATEGORY':
        return { ...state, categoryList: categoryList };
  
      case 'SELECT_CATEGORY':
        return { ...state, activeCategory: payload };
  
      default:
        return state;
    }
  };
  
  export default categoriesReducer;