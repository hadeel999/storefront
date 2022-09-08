const initialState = [];
// eslint-disable-next-line
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
    name: 'Witcher 3 Wild Hunt',
    description: '2015 Game of the Year',
    img: 'https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png?w=440',
    category: 'games',
    inStock: 90,
    price: 25,
  },
  {
    id: 4,
    name: "Assassin's Creed Black Flag",
    description: "Best Assassin's Creed Game",
    img: 'https://cdn-products.eneba.com/resized-products/vqv03fmtmnvnvlolm6b5_350x200_1x-0.jpg',
    category: 'games',
    inStock: 45,
    price: 17,
  },
];

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