import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {loginModalClose, loginModalOpen, loginUser, logoutUser} from "../redux/ActionCreators";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import About from "./about/About";
import NotFound from "./notFound/NotFound";
import Contact from "./contact/Contact";
import Register from "./register/Register";
import Hackathons from "./hackathons/Hackathons";
import OnePageHackathon from "./onePageHackathon/OnePageHackathon";


const mapDispatchToProps = dispatch => ({
    loginModalClose: () => dispatch(loginModalClose()),
    loginModalOpen: () => dispatch(loginModalOpen()),

    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
});

const mapStateToProps = state => {
    return {
        loginModal: state.loginModal,
        hackathons: state.hackathons,
        auth: state.auth
    };
};


const Main = props => {
    const HomePage = () => {
        return (
            <Home
                loginModalOpen={props.loginModalOpen}
                auth={props.auth}
            />
        );
    };

    const HackathonsPage = () => {
        return (
            <Hackathons
                oneHack={props.hackathons.hackathons.filter((hackathon) => hackathon.name === "AI Hack Tunisia 5")[0]}
                hackathons={props.hackathons.hackathons}
                auth={props.auth}
            />
        );
    };

    const OneHackathonPage = ({match}) => {
        return (
            <OnePageHackathon
                propId = {match.params.id}
                oneHack = {props.hackathons.hackathons.filter ((hackathon) => hackathon.id === parseInt(match.params.id,10))[0]}
                auth={props.auth}
                loginModalOpen={props.loginModalOpen}
            />
        );
    };
    return (
        <div>
            <Header
                isModalOpen={props.loginModal.isModalOpen}
                auth={props.auth}
                loginModalClose={props.loginModalClose}
                loginModalOpen={props.loginModalOpen}
                loginUser={props.loginUser}
                logoutUser={props.logoutUser}
            />
            <Switch>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route path='/register' component={Register}/>
                <Route exact path='/hackathons' component={HackathonsPage}/>
                <Route path='/hackathons/:id' component={OneHackathonPage}/>
                <Route path='/' component={HomePage}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </div>
    );

};


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);

