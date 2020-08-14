import React from 'react';
import "./navbar.sass";


function NavbarLoggedIn(props) {
    return (
        <div id="mySidenav" class="sidenav">
            <img src={require('../../../img/logo-original.png')} className="img-fluid" style="color: #0f0f0f" alt=""/>
            <a href="#" className="closebtn" onClick="closeNav()">&times;</a>
            <a href="#">Home</a>
            <a href="#">Hackathons</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <button className="button send-button row mx-auto">
                Login
            </button>
            <button className="button send-button row mx-auto">
                Register
            </button>
        </div>
    );
}

export default NavbarLoggedIn;
