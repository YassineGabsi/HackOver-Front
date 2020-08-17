import React from 'react';
import "./header.sass";
import Navb from "./navbar/Navbar";
import Login from "../loginModal/Login";


function Header(props) {
    return (
        <header>
            <Navb
                isModalOpen={props.isModalOpen}
                loginModalClose={props.loginModalClose}
                loginModalOpen={props.loginModalOpen}

            />
        </header>
    );
}

export default Header;
