const initialState = [];

const productList = [
  {
    id: 1,
    name: 'burger',
    description: 'Meaty and Cheesy',
    img: 'https://ribsandburgers.com/au/wp-content/uploads/2019/03/2-angus-bacon-and-cheese.jpg',
    category: 'food',
    inStock: 72,
    price: 50,
  },
  {
    id: 2,
    name: 'pizza',
    description: 'The original Italian taste',
    img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2-500x500.jpg',
    category: 'food',
    inStock: 120,
    price: 1,
  },
  {
    id: 3,
    name: 'Laptop',
    description: 'Laptop',
    img: 'https://user-images.githubusercontent.com/103508563/188701101-063f7727-e0d2-4c63-8ff8-11ab3694c094.jpg',
    category: 'Technology',
    inStock: 90,
    price: 400,
  },
  {
    id: 4,
    name: "Smart phone",
    description: "smartphone",
    img: 'https://user-images.githubusercontent.com/103508563/188701529-3c3d76b0-2513-4552-bcd9-62bf6608a60b.jpg',
    category: 'Technology',
    inStock: 45,
    price: 250,
  },
];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD_CATEGORY':
      return state;

    case 'SELECT_CATEGORY':
      return productList.filter((prod) => prod.category === payload);

    default:
      return state;
  }
};

export default productReducer;