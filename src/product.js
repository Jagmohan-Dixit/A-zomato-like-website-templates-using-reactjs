import React from 'react';
import { useContext } from 'react';
import {Productscontext} from "./mycomponents/mycart/Productscontext"
import {Cartcontext} from "./mycomponents/mycart/cartcontext";
import Head from './Head';

const Products = () => {
    const {products} = useContext(Productscontext);
    const {dispatch} = useContext(Cartcontext);
    // console.log("Data variable",data);
    return (
        <div className="container">
        <Head />
        <div className="products">
            {products.map((product) => (
            <div className="product" key={product.id}>
                <div className="product-image">
                    <img src={product.image} alt="not found" />
                </div>
                <div className="product-details">
                <div className="product-name">
                    {product.name}
                </div>
                <div className="product-price">
                    Rs {product.price}.00
                </div>
            </div>
            <div className="add-to-cart" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id})}>Add to Cart</div>
            {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
            {product.status === 'new' ? <div className="new">New</div> : ''}
            </div>
            ))}
        </div>
        </div>
    )
}

export default Products;
