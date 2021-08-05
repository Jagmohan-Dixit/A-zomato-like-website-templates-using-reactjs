import React from'react';
import { withRouter, Router,Switch, Route, Redirect, BrowserRouter, useHistory, useLocation } from 'react-router-dom';
import { Component } from 'react';
import './App.css';
import Head from './Head';
import About from './mycomponents/About';
import Shop from './mycomponents/Shop';
import Pizzamenu from './mycomponents/Pizzamenu';
import Card from './mycomponents/card';
import Pizzatypes from './mycomponents/Pizzatypes';
import Deliverypage from './mycomponents/deliverypage';
import Menu from './mycomponents/Menu';
import Contact from './mycomponents/Contact'

// import ProductscontextProvider from './mycomponents/mycart/Productscontext';
// import Products from './product';
// import Cart from './cart'
// import CartcontextProvider from './mycomponents/mycart/cartcontext';



function App() {
    return (
     <div>
        {/* <ProductscontextProvider> */}
        {/* <CartcontextProvider> */}
         {/* <Products /> */}
        <Head />
        <About />
        <Shop />
        <Pizzamenu />
        <Card />
        <Pizzatypes />
        <Deliverypage />
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={withRouter(Head)} />
            <Route path="/about" exact component={withRouter(About)} />
            <Route path="/Menu" exact component={withRouter(Menu)} />
            <Route path="/Contact" exact component={Contact} />
            {/* <Route path="/cart" exact component={Cart} /> */}
            
            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
        {/* </CartcontextProvider> */}
        {/* </ProductscontextProvider> */}
     </div>
    );
}
export default App;