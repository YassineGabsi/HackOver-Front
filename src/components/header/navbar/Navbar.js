import React, {Component} from 'react';
import "./navbar.sass";
import {    Navbar, NavbarBrand} from 'reactstrap';
import NavbarToggler from "reactstrap/es/NavbarToggler";
import Login from "../../loginModal/Login";


class Navb extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
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
                                    <a className="nav-link vivify flipInX delay-150"  href="/home">Home </a>
                                </li>
                                <li className="nav-item">
                                    <a to className="nav-link vivify flipInX delay-150" href="#">Hackathons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link vivify flipInX delay-150" href="/about">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link vivify flipInX delay-150" href="/contact">Contact us</a>
                                </li>
                            </ul>
                            <div className=" desktop-only row">
                                <button className="button button-reg-log row mx-3" data-toggle="modal"
                                        onClick={this.props.loginModalOpen}
                                        data-target="#myModal">
                                    Log In
                                </button>
                                <button className="button button-reg-log row mx-auto"
                                        onClick={event =>  window.location.href='/register'}>
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
                        <a href="#" onClick={this.props.loginModalOpen}>Login</a>
                        <a href="#">Register</a>
                        <div className="line-squared"/>
                        <a href="#">Home</a>
                        <a href="#">Hackathons</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                    </div>
                ) : null}
                {this.props.isModalOpen ? (
                    <Login
                        loginModalOpen = {this.props.loginModalOpen}
                        loginModalClose = {this.props.loginModalClose}
                    />
                ) : null}
            </div>
        );
    }
}

export default Navb;
