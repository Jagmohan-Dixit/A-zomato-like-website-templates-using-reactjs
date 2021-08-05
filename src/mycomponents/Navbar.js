import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="navbar__text">
            <div className="logo">
                <img src = "/images/pizzalogo.png" alt="logo" />
                </div>
                <ul className="navbar__ul">
                    <li>
                        <Link to={"/Head"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/Menu"}>Menu</Link>
                    </li>
                    <li><a href="">Shop</a></li>
                    <li>
                        <Link to={"/About"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/Contact"}>Contact</Link>
                    </li>
                    
                </ul>
        </div>
    </nav>
    );
};

export default Navbar;