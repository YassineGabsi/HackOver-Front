import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Main = props => {
    return(
        <div>
            <Header
                user={props.user}
                isLoggedIn={props.isLoggedIn}
                logout={props.logout}
            />
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
