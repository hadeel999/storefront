const initialState = {
    categories: {
      activeCategory: '',
      categoryList: [],
    },
    products: [],
  };
  
  const categoryList = [
    {
      id: 1,
      name: 'Food',
      description: 'Delicious food.',
    },
    {
      id: 2,
      name: 'Technology',
      description: 'Technologies.',
    },
  ];
  const productList = [
    {
      id: 1,
      name: 'Burger',
      category: 'Food',
      inStock: 72,
      price: 5,
    },
    {
      id: 2,
      name: 'Pizza',
      category: 'Food',
      inStock: 120,
      price: 5,
    },
    {
      id: 3,
      name: 'Laptop',
      category: 'Technology',
      inStock: 90,
      price: 400,
    },
    {
      id: 4,
      name: "Mouse",
      category: 'Technology',
      inStock: 45,
      price: 15,
    },
  ];
  
  const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'LOAD_CATEGORY':
        return {
          categories: { ...state.categories, categoryList },
          products: state.products,
        };
  
      case 'SELECT_CATEGORY':
        return {
          categories: { ...state.categories, activeCategory: payload },
          products: productList.filter((prod) => prod.category === payload),
        };
  
      default:
        return state;
    }
  };
  
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
  
  export default productReducer;