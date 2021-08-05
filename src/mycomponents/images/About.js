import React from 'react'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About Us</h3>
                        <h1>WELCOME TO JAGGU'S PIZZA</h1>
                        <p>Investigationes demonstraverunt lectores legere me lius
                           quod ii legunt saepius. Claritas est etiam processus dynaus,
                           quise sequitur mutationem consuetudium lectorum
                        </p>
                        <div className="about__button">
                            <a href="" className="button button-smart">READ MORE</a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__image">
                            <img src ="/images/welcomepizza.jpg" alt="pizza" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;


