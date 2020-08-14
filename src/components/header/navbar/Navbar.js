import React, {Component} from 'react';
import "./navbar.sass";
import {    Navbar, NavbarBrand} from 'reactstrap';
import NavbarToggler from "reactstrap/es/NavbarToggler";
import Collapse from "reactstrap/es/Collapse";
import NavbarLoggedIn from "./NavbarLoggedIn";

class Navb extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
        console.log(this.state.isNavOpen);

    }

    render() {
        return (
            <div>
                <Navbar className=" navbar navbar-expand-lg navbar-dark vivify fadeIn delay-150">
                    <div className="mid col-12 row">
                        <NavbarToggler className="button-toggler" onClick={this.toggleNav} />
                        <NavbarBrand className="left col-lg-2 col-md-3 col-sm-4 col-xs-5 mr-auto">
                            <img src={require('../../../img/logo.png')} alt=""
                                 className="col-lg-12 navbar-brand-image"
                            />
                        </NavbarBrand>
                        <div className="collapse navbar-collapse col-lg-10 ">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link vivify flipInX delay-150" href="#">Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link vivify flipInX delay-150" href="#">Hackathons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link vivify flipInX delay-150" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link vivify flipInX delay-150" href="#">Contact us</a>
                                </li>
                            </ul>
                            <div className=" desktop-only row">
                                <button className="button button-reg-log row mx-3" data-toggle="modal"
                                        data-target="#myModal">
                                    Log In
                                </button>
                                <button className="button button-reg-log row mx-auto">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </Navbar>
                {this.state.isNavOpen ? (
                    <div className="sidenav vivify popInLeft">
                        <img src={require('../../../img/logo-original.png')} className="mx-auto d-block "
                             alt=""/>
                        <a className="closebtn" onClick={this.toggleNav}>&times;</a>
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                        <div className="line-squared"/>
                        <a href="#">Home</a>
                        <a href="#">Hackathons</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Navb;
