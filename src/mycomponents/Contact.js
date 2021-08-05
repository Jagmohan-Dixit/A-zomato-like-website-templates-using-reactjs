import React from 'react'

const  Contact = () => {
    return (
        <div className="delivery">
            <div className="row">
                <div className="deliveryhead">
                    <h1>CONTACT US</h1>
                    <p>Fill the following details to Reach us .</p>
            
        <form action="#" className="form">

        <div className="c">
                <label htmlFor="pizzatype"></label>
                <select className="cc" name="pizzatype" id="pizzatype" style={{height:"60px"}} required>
                <option value="" className="inside">        !! How Can We Help You !! &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</option>
                <option value="">I found incorrect information on the page.</option>
                <option value="">The website is not working the way they should.</option>
                <option value="">I would like to give suggestions.</option>
                <option value="">I need some hep with my blog.</option>
                <option value="">I didn't recieve my order.</option>
                <option value="">Rude behaviour of delivery boy.</option>
                <option value="">Other</option>
                </select>
            </div>

            <div className="c">
                <label htmlFor="input-lg"></label>
                <input className="cc" type="text" name="username" id="input-lg" placeholder="            Full Name" size="85" style={{height:"60px"}} />             
            </div>

            <div className="c">
                <label htmlFor="adress"></label>
                <input className="cc" type="text" name="adress" id="adress" placeholder="           Email Adress" size="85" style={{height:"60px"}}/>
            </div>
        
            <div className="c">
                <label htmlFor="quantity"></label>
                <input className="cc" type="text" name="quantity" id="quantity" placeholder="           Mobile Number" size="85" style={{height:"60px"}}/> 
            </div>

            <div className="c">
                <label htmlFor="quantity"></label>
                <input className="cc" type="text" name="quantity" id="quantity" placeholder="          Type Text" size="85" style={{height:"170px"}}/> 
            </div>


            <div className="delivery__button">
                <a href="" className="button button-delivery">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; SUBMIT FEEDBACK 
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
            </div>
        </form>
        </div>
                <div className="aboutimage">
                    <div className="about__image">
                        <img src ="/images/contact.jpeg" alt="pizza" />
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Contact;