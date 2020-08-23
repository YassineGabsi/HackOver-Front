import React from 'react';
import "./header.sass";
import Navb from "./navbar/Navbar";


function Header(props) {
    return (
        <header>
            <Navb
                isModalOpen={props.isModalOpen}
                loginModalClose={props.loginModalClose}
                loginModalOpen={props.loginModalOpen}
                auth={props.auth}
                loginUser={props.loginUser}
                logoutUser={props.logoutUser}

            />
        </header>
    );
}

export default Header;
