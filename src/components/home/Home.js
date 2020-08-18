import React from 'react';
import "./home.sass";

function Home (props) {
    return(
        <div className="container middle-content">
            <div className="row  d-flex justify-content-center text-center">
                <div className="col-12 middle-logo">
                    <img className=" img-fluid vivify popIn" src={require("../../img/middlelogo-mobile.png")} alt="hh"/>
                </div>
                <h1 className=" col-12 first-title vivify flipInX delay-150">We <a className="red-colored" onClick={props.loginModalOpen}>connect</a> you to the best hackathons</h1>
                <h2 className="col-12 vivify flipInX delay-250">Play, Compete, <span className="red-colored">Win</span></h2>
                <div className="row vivify popIn">
                    <button className="button row mx-5"
                       data-toggle="modal"
                       onClick={props.loginModalOpen}>
                        Log In
                    </button>
                    <button className="button  row mx-5">
                        Register
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Home;
