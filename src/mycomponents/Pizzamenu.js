import React from 'react'

const Pizzamenu = () => {
    return (
        <div className="pizzamenu">
            <div className="container">
                <div className="row">
                <div className="col-6">
                        <div className="pizzamenu__image">
                            <img src ="/images/chicagopizza.jpg" alt="pizza" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>DELHI THIN CRUST</h1>
                        <p>Investigationes demonstraverunt lectores legere me lius
                           quod ii legunt saepius. Claritas est etiam processus dynaus,
                           quise sequitur mutationem consuetudium lectorum
                        </p>
                        <div className="pizzamenu__button">
                            <a href="" className="button button-smart">VIEW MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizzamenu;
