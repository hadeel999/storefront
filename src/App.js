import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import SimpleCart from './components/simpleCart';
import Cart from './components/cart';
import { If } from 'react-if';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App(props) {
  const state = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Categories />
          <SimpleCart />
          <If condition={state.products.length > 0}>
            <Products />
          </If>
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;