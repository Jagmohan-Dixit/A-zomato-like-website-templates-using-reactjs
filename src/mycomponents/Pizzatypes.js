import React from 'react'

const Pizzatypes = () => {
    return (
        <div className="pizzatypes">
            <div className="pizzahead">
                    <h3>Pizza Menu</h3>
                    <h1>WELCOME TO</h1>
                    <h1>JAGGU'S PIZZA</h1>
            </div>
            <br />
            <div className="container">
                <div class="row1">
                    <div className="col-4">
                    <div className="pizzamenu__image">
                            <img src ="/images/pizza margeritta.png" alt="pizza" />
                        </div>
                        <div className="pizza">
                            <h1>Tandoori Paneer</h1>
                            <p>Spiced paneer, Onion, Green Capsicum and Red Paprika in Tandoori Sauce. All New Crust stuffed with flavourful veg kebab and refreshing mint mayo. It is the most sellest item of our menu.</p>
                        </div>
                        <br />
                        <div className="pizzamenubutton">
                            <a href="" className="button button-smart">Rs. 399</a>
                        </div>
                    </div> 
                    <div className="col-4">
                    <div className="pizzamenu__image">
                        <img src ="/images/pizza margeritta.png" alt="pizza" />
                        </div>
                        <div className="pizza">
                            <h1>Margherita</h1>
                            <p>All New Crust stuffed with flavourful veg kebab and refreshing mint mayo. Base topped with signature tandoori sauce. Original Pan crust. Crunchy on the outside, soft and fluffy on the inside.</p>
                        </div>
                        <br />
                        <div className="pizzamenubutton">
                            <a href="" className="button button-smart">Rs. 399</a>
                        </div>
                    </div> 
                    <div className="col-4">
                    <div className="pizzamenu__image">
                        <img src ="/images/double supreme.jpg" alt="pizza" />
                        </div>
                        <div className="pizza">
                            <h1>Double Paneer Supreme</h1>
                            <p>All New Crust stuffed with flavourful veg kebab and refreshing mint mayo. Base topped with signature tandoori sauce.</p>
                        </div>
                        <br />
                        <div className="pizzamenubutton">
                            <a href="" className="button button-smart">Rs. 599</a>
                        </div>
                    </div>   
                </div>
                <br />
                <br />
                <div class="row2">
                    <div className="col-4">
                    <div className="pizzamenu__image">
                        <img src ="/images/chicken pizza.jpg" alt="pizza" />
                        </div>
                        <div className="pizza">
                            <h1>Chicken Supreme</h1>
                            <p>Herbed Chicken, Schezwan Chicken Meatball, Chicken Tikka</p>
                        </div>
                        <br />
                        <div className="pizzamenubutton">
                            <a href="" className="button button-smart">Rs. 699</a>
                        </div>
                    </div> 
                    <div className="col-4">
                    <div className="pizzamenu__image">
                        <img src ="/images/double cheese.jpg" alt="pizza" />
                        </div>
                        <div className="pizza">
                            <h1>Double Cheese</h1>
                            <p>Cheese lovers paradise! Crust stuffed with cheese and creamy Peruvian sauce</p>
                        </div>
                        <br />
                        <div className="pizzamenubutton">
                            <a href="" className="button button-smart">Rs. 499</a>
                        </div>
                    </div> 
                    <div className="col-4">
                    <div className="pizzamenu__image">
                        <img src ="/images/countryfeast pizza.png" alt="pizza" />
                        </div>
                        <div className="pizza">
                            <h1>Country Feast</h1>
                            <p>Herbed Onion and Green capsicum, Sweet Corn, Tomato, Mushroom ( Vegetarian )</p>
                        </div>
                        <br />
                        <div className="pizzamenubutton">
                            <a href="" className="button button-smart">Rs. 699</a>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Pizzatypes; 

