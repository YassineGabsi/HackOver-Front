import React from 'react';
import "./card.sass";
import Card from "reactstrap/es/Card";

function CardHackathons(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card  box-shadow mb-3 vivify popIn ">
                <div className="card-container">
                    <h5 className="card-date">23-23-2323</h5>
                </div>
            </div>
            <div className="line-squared vivify fadeIn delay-200"/>
            <h5 className="brand vivify flipInX delay-150 mt-2">AI Hack Tunisia</h5>
        </div>
    );
}

export default CardHackathons;
