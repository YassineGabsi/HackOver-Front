import React, {Component} from 'react';
import "./navbar.sass";
import {Navbar, NavbarBrand} from 'reactstrap';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import NavbarToggler from "reactstrap/es/NavbarToggler";
import Login from "../../loginModal/Login";


class Navb extends Component {
     constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            isNavOpen: false,
            isDropdownOpen: false,
            bg: null,
        };
    }

    componentDidMount  ( ) {
        if (this.props.auth.isAuthenticated && !this.props.auth.isLoading)
            this.setState({
                bg: require(`../../../img/${this.props.auth.user.picture}`)
            });
        console.log("hi");

    }

    logout() {
        this.props.logoutUser();
        this.props.loginModalClose()
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleDropdown() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }


    render() {
        return (
            <div>
                <Navbar className=" navbar navbar-expand-lg navbar-dark vivify fadeIn delay-150">
                    <div className="mid col-12 row">
                        <NavbarToggler className="button-toggler" onClick={this.toggleNav}/>
                        <NavbarBrand className="left col-lg-2 col-md-3 col-sm-4 col-xs-5 mr-auto">
                            <a href="/">
                                <img  src={require('../../../img/logo.png')} alt=""
                                      className="col-lg-12 navbar-brand-image"
                                />
                            </a>

                        </NavbarBrand>
                        <div className="collapse navbar-collapse col-lg-10 ">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link vivify flipInX delay-150" href="/">Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link vivify flipInX delay-150" href="/hackathons">Hackathons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link vivify flipInX delay-150" href="/about">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link vivify flipInX delay-150" href="/contact">Contact us</a>
                                </li>
                            </ul>



                            {this.props.auth.isAuthenticated ? (
                                <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown}>
                                    <div className="desktop-only d-flex ">
                                        <h3 className="mt-4 mr-3">{this.props.auth.user.fullName}</h3>
                                        <DropdownToggle className="drop-toggle">
                                            <div className="user-circle" style={{backgroundImage: "url("+this.state.bg+") "}}/>
                                        </DropdownToggle>
                                    </div>
                                    <DropdownMenu right>
                                        <div className="arrow-up "/>
                                        <div className="drop-items">
                                            { this.props.auth.user.role === "Organizator" ? (
                                                <>
                                                    <DropdownItem href="/hackathons-organized" style={{marginTop: "0"}}>Hackathons Organized</DropdownItem>
                                                    <DropdownItem href="/add-hackathon" style={{marginTop: "0"}}>Add a hackathon</DropdownItem>
                                                </>
                                            ) : (
                                                <DropdownItem>Hackathons Participated in</DropdownItem>
                                            )}
                                            <DropdownItem href="/profile" style={{marginTop: "0"}}>Profile Settings</DropdownItem>
                                            <DropdownItem onClick={this.logout} href="">Logout</DropdownItem>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <div className=" desktop-only row">
                                    <button className="button button-reg-log row mx-3"
                                            onClick={this.props.loginModalOpen}>
                                        Log In
                                    </button>
                                    <button className="button button-reg-log row mx-auto"
                                            onClick={event => window.location.href = '/register'}>
                                        Register
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </Navbar>
                {this.state.isNavOpen ? (
                    <div className="sidenav vivify popInLeft tablet-and-mobile-only">
                        <img src={require('../../../img/logo-original.png')} className="mx-auto d-block "
                             alt=""/>
                        <a className="closebtn" onClick={this.toggleNav}>&times;</a>


                        {this.props.auth.isAuthenticated ? (
                            <>
                                <div className=" row text-center mx-auto" style={{padding: "8px 8px 8px 32px"}}>
                                    <div className="user-circle " style={{backgroundImage: "url("+this.state.bg+") "}}/>
                                    <span className="mt-3 ml-3 user-name small-titles font-weight-bold">{this.props.auth.user.fullName}</span>
                                </div>
                                <a href="hackathons-organized">Hackathons Organized</a>
                                <a href="/profile">Profile Settings</a>
                                <a href="/add-hackathon">Add a hackathon</a>
                                <a onClick={this.props.logoutUser} href="">Logout</a>
                            </>
                        ) : (
                            <>
                                <a href="#" onClick={this.props.loginModalOpen}>Login</a>
                                <a href="/register">Register</a>
                            </>
                        )}
                        <div className="line-squared"/>
                        <a href="/">Home</a>
                        <a href="/hackathons">Hackathons</a>
                        <a href="/about">About Us</a>
                        <a href="contact">Contact Us</a>
                    </div>
                ) : null}
                {this.props.isModalOpen ? (
                    <Login
                        loginModalOpen={this.props.loginModalOpen}
                        loginModalClose={this.props.loginModalClose}
                        auth={this.props.auth}
                        loginUser={this.props.loginUser}
                        logoutUser={this.props.logoutUser}
                    />
                ) : null}
            </div>
        );
    }
}

export default Navb;
