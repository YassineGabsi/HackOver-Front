import React from 'react';
import "./header.sass";
import Navb from "./navbar/Navbar";


function Header(props) {
    return (
        <header>
            <Navb
                user={props.user}
                isLoggedIn={props.isLoggedIn}
                logout={props.logout}
            />
        </header>
    );
}

export default Header;
