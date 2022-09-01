import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import { If } from 'react-if';
import { connect } from 'react-redux';

function App(props) {
  return (
    <>
      <Header />
      <Categories />
      <If condition={props.products.length > 0}>
        <Products />
      </If>
      <Footer />
    </>
  );
}

const stateToProps = (state) => {
  return state;
};
export default connect(stateToProps)(App);