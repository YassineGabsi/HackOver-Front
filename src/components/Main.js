import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import About from "./about/About";
import NotFound from "./notFound/NotFound";

const Main = props => {
    return(
        <div>
            <Header
                user={props.user}
                isLoggedIn={props.isLoggedIn}
                logout={props.logout}
            />
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/home' component={Home}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </div>
    );

};


const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user,
        isLoadingUser: state.isLoadingUser
    };
};


const mapDispatchToProps = dispatch => ({
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);
