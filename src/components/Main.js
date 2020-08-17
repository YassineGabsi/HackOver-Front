import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import  {loginModalClose, loginModalOpen} from "../redux/ActionCreators";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import About from "./about/About";
import NotFound from "./notFound/NotFound";

const Main = props => {
    const HomePage = () => {
        return (
            <Home
                loginModalOpen={props.loginModalOpen}
            />
        );
    };
    return(
        <div>
            <Header
                isModalOpen={props.loginModal.isModalOpen}
                loginModalClose={props.loginModalClose}
                loginModalOpen={props.loginModalOpen}
            />
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/home' component={HomePage}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </div>
    );

};


const mapStateToProps = state => {
    return {
        loginModal: state.loginModal,
    };
};


const mapDispatchToProps = dispatch => ({
    loginModalClose: () => dispatch(loginModalClose()),
    loginModalOpen: () => dispatch(loginModalOpen()),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);
