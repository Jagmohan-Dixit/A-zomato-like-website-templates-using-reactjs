import React from "react";
import Navbar from './mycomponents/Navbar';

const Head = () => {
    return (
    <div className ="banner">
        <Navbar />
        <div class="banner__content">
            <div className="container">
                <div className="banner__text">
                <h3>Pizza Delivery</h3>
                <h1>JAGGU'S PIZZA</h1>
                <p>
                    This website is created by jagmohan dixit for website purpose.
                </p>
                <div className="banner__button">
                    <a href="" className="button button-smart">DELIVERY NOW</a>
                </div>
                </div>
            </div>
        </div>
    </div> 

    );
};

export default Head;
