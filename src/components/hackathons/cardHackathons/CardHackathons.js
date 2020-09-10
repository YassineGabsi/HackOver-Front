import React from 'react';
import "./card.sass";
import Redirect from "react-router-dom/es/Redirect";
import withRouter from "react-router-dom/es/withRouter";


function CardHackathons(props) {

    const redirectToHackathon = (e) => (
        props.history.push({
            pathname: `/hackathons/${props.oneHack._id}`,
            state: { edit: true }
        })
    );
    const redirectToHackathonNormal = (e) => (
        props.history.push({
            pathname: `/hackathons/${props.oneHack._id}`,
            state: { edit: false }
        })
    );
    // var bg = require(`../../../img/${props.oneHack.photos}`);
    var bg = require(`../../../img/${props.oneHack.image}`);
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <a onClick={redirectToHackathonNormal} >
                <div className="card  box-shadow mb-3 vivify popIn "
                     style={{backgroundImage: "url(" + bg + ") "}}
                >
                    <div className="card-container">
                        <h5 className="card-date">
                            {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit",
                            }).format(new Date(props.oneHack.dateDebut))}
                        </h5>
                    </div>
                </div>
            </a>
            <div className="line-squared vivify fadeIn delay-200"/>
            <h5 className="brand vivify flipInX delay-150 mt-2 text-size">{props.oneHack.name} </h5>
            {props.organized ? (
                <>
                    <h5 className="red-colored vivify flipInX delay-150 mt-2 text-size">xx Participants </h5>
                    <a className="vivify flipInX delay-150 mt-2 text-size" onClick={e => redirectToHackathon(e)}>
                        <span className="fa fa-pencil  mr-3 mt-3 " aria-hidden="true"/>
                        Edit
                    </a>
                </>
            ) : null}


        </div>
    );
}

export default withRouter(CardHackathons);
