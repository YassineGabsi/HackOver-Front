import React, {Component, useEffect, useState} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {
    loginModalClose,
    loginModalOpen,
    loginUser,
    logoutUser,
    registerUser,
    getHackathons,
    addHackathon,
    updateHackathon
} from "../redux/ActionCreators";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import About from "./about/About";
import NotFound from "./notFound/NotFound";
import Contact from "./contact/Contact";
import Register from "./register/Register";
import Hackathons from "./hackathons/Hackathons";
import OnePageHackathon from "./onePageHackathon/OnePageHackathon";
import Loader from "./loader/Loader";
import GeneralLoader from "./loader/GeneralLoader";
import ProfileSettings from "./profileSettings/ProfileSettings";
import AddHackathon from "./addHackathon/AddHackathon";
import CardHackOrg from "./cardHackathonsOrganizator/CardHackOrg";


const mapDispatchToProps = dispatch => ({
    loginModalClose: () => dispatch(loginModalClose()),
    loginModalOpen: () => dispatch(loginModalOpen()),

    registerUser: (data) => dispatch(registerUser(data)),

    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),

    getHackathons: () => dispatch(getHackathons()),
    addHackathon: (data) => dispatch(addHackathon(data)),
    updateHackathon: (data, id) => dispatch(updateHackathon(data, id)),
});

const mapStateToProps = state => {
    return {
        loginModal: state.loginModal,
        hackathons: state.hackathons,
        feedbacks: state.feedbacks,
        auth: state.auth,
        registration: state.registration
    };
};


const LoggedOutRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => !localStorage.getItem("accessToken") ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: "/404",
                    state: {from: props.location}
                }}
            />
        )}
    />
);

const LoggedInRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => localStorage.getItem("accessToken") ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: "/404",
                    state: {from: props.location}
                }}
            />
        )}
    />
);

const Main = props => {
    const [DOMLoading, setDOMLoading] = useState(true);

    useEffect(() => {
            setDOMLoading(false);
        if (props.hackathons.hackathons.length ===0 )
            props.getHackathons()
        }, []
    );

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
                isLoading={props.hackathons.isLoading}
                auth={props.auth}
                getHackathons={props.getHackathons}
            />
        );
    };

    const OneHackathonPage = ({match}) => {
        return (
            <OnePageHackathon
                propId={match.params.id}
                oneHack={props.hackathons.hackathons.filter((hackathon) => hackathon._id === match.params.id, 10)[0]}
                auth={props.auth}
                feedbacks={props.feedbacks.feedbacks}
                updateHackathon={props.updateHackathon}
            />
        );
    };

    const AddHackathonPage = () => {
        if (props.auth.user.role === "Organizator")
            return (
                <AddHackathon
                    user={props.auth.user}
                    addHackathon={props.addHackathon}
                    isLoading={props.hackathons.isLoading}
                    isLoaded={props.hackathons.isLoaded}
                    isAdded={props.hackathons.isAdded}
                />
            );
        else
            return (
                <NotFound/>
            );
    };

    const RegisterPage = () => {
        return (
            <Register
                registerUser={props.registerUser}
                registration={props.registration}
            />
        );
    };

    const ProfileSettingsPage = () => {
        return (
            <ProfileSettings
                user={props.auth.user}
            />
        );
    };

    const HackathonsOrganized = () => {
        if (props.auth.user.role === "Organizator")
            return (
            <CardHackOrg
                user={props.auth.user}
                hackathons={props.hackathons.hackathons}
                isLoading={props.hackathons.isLoading}
                isLoaded={props.hackathons.isLoaded}
            />
        );
        return (
            <NotFound/>
        );
    };

    return (
        !DOMLoading && !props.hackathons.isLoading && props.hackathons.isLoaded ?(
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
                    <Route exact path='/loader' component={Loader}/>
                    <Route exact path='/contact' component={Contact}/>
                    <LoggedOutRoute exact path='/register' component={RegisterPage}/>
                    <LoggedInRoute exact path='/profile' component={ProfileSettingsPage}/>
                    <LoggedInRoute exact path='/add-hackathon' component={AddHackathonPage}/>
                    <LoggedInRoute exact path='/hackathons-organized' component={HackathonsOrganized}/>
                    <Route exact path='/hackathons' component={HackathonsPage}/>
                    <Route path='/hackathons/:id' component={OneHackathonPage}/>
                    <Route exact path='/' component={HomePage}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>) : (
            <div>
                <GeneralLoader/>
            </div>
        )

    );

};


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);

