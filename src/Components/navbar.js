import React from "react";
import "./navbar.css";
const Navbar = () => {
    return (
        <>
           
            <nav className="main-nav">
                
                    <ul className="list">
                        <div className="logo">
                            <img className="logo" src='./Bhadani.png' alt="logo" />
                        </div>

                    <li><a href="home">Home</a></li>
                    <li><a href="products">Products</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="contact">contact</a></li>
                        
                    </ul>
                
            </nav>
        </>
        )
   
}
export default Navbar;