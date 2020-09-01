import React from 'react';
import "./home.sass";
import { useHistory } from "react-router-dom";

function Home (props) {
    const history = useHistory();
    const routeChange = () =>{
        let path = `/register`;
        history.push(path);
    };

    return(
        <div className="container middle-content">
            <div className="row  d-flex justify-content-center text-center">
                <div className="col-12 middle-logo">
                    <img className=" img-fluid vivify popIn"  src={require("../../img/middlelogo-mobile.png")} alt="hh"/>
                </div>
                <h1 className=" col-12 first-title vivify flipInX delay-150">We <button disabled={props.auth.isAuthenticated} className=" text-button red-colored"  onClick={props.loginModalOpen}>connect</button> you to the best hackathons</h1>
                <h2 className="col-12 vivify flipInX delay-250">Play, Compete, <span className="red-colored h2-like">Win</span></h2>
                {!props.auth.isAuthenticated ? (
                    <div className="row vivify popIn">
                        <button className="button row mx-5"
                                data-toggle="modal"
                                onClick={props.loginModalOpen}>
                            Log In
                        </button>
                        <button className="button  row mx-5"
                                onClick={routeChange}
                        >
                            Register
                        </button>
                    </div>
                ) : (
                    <h2 className="col-12 vivify flipInX delay-250 mt-4">Welcome, <span className="red-colored">{props.auth.user.email}</span></h2>
                ) }


            </div>
        </div>
    );
}

export default Home;
