import React from 'react'

const  Deliverypage = () => {
    return (
        <div className="delivery">
            <div className="row">
                <div className="deliveryhead">
                    <h3>Quick Delivery</h3>
                    <h1>ORDER A &emsp; &emsp; &emsp; &emsp; PIZZA NOW</h1>
                    <p>Fill the following details to deliver your pizza to your Home</p>
            
        <form action="#" className="form">
            <div className="c">
                <label htmlFor="input-lg"></label>
                <input className="cc" type="text" name="username" id="input-lg" placeholder="   First Name" size="30" style={{height:"50px"}} />
                &emsp;
                <input className="cc" type="text" name="username" id="input-lg" placeholder="   Last Name" size="30" style={{height:"50px"}}/>
            </div>

            <div className="c">
                <label htmlFor="adress"></label>
                <input className="cc" type="text" name="adress" id="adress" placeholder="   Enter Street Adress" size="68" style={{height:"50px"}}/>
            </div>

            <div className="c">
            <label htmlFor="room"></label>
                <input className="cc" type="text" name="room" id="room" placeholder="   Apartment/Room" size="30" style={{height:"50px"}}/>
                &emsp;
                <label htmlFor="number"></label>
                <input className="cc" type="text" name="number" id="number" placeholder="   Enter Mobile Number" size="30" style={{height:"50px"}}/>
            </div>

            <div className="c">
                <label htmlFor="pizzatype"></label>
                <select className="cc" name="pizzatype" id="pizzatype" style={{height:"50px"}} required>
                <option value=""> Pizza Type &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</option>
                <option value="">Country Feast Pizza</option>
                <option value="">Tandoori Paneer Pizza</option>
                <option value="">Margherita Pizza</option>
                <option value="">Non-Veg Pizza</option>
                <option value="">Supreme Pizza</option>
                <option value="">Double Cheese Pizza</option>
                <option value="">Double Supreme Pizza</option>
                </select>
            </div>
        
            <div className="c">
                <label htmlFor="quantity"></label>
                <input className="cc" type="text" name="quantity" id="quantity" placeholder="   No. of Pizza" size="30" style={{height:"50px"}}/> 
                &emsp;
                <label htmlFor="size"></label>
                <select className="cc" name="pizzasize" id="pizzasize" style={{height:"50px"}} required>
                <option value="">Pizza Size &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</option>
                <option value="">Small</option>
                <option value="">Medium</option>
                <option value="">Large</option>
                <option value="">Extra Large</option>
                </select>
            </div>
            <div className="delivery__button">
                <a href="" className="button button-delivery">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; QUICK DELIVERY 
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
            </div>
        </form>
        </div>
                <div className="col-deliveryimage">
                    <div className="delivery__image">
                        <img src ="/images/deliveryboy.jpg" alt="pizza" />
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Deliverypage;
