import React from 'react';
import "./card.sass";

function CardHackathons(props) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card  box-shadow mb-3 vivify popIn " style={{backgroundImage: `url(${props.oneHack.image})`}}>
                <div className="card-container">
                    <h5 className="card-date">
                        {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                        }).format(new Date(props.oneHack.date))}
                        </h5>
                </div>
            </div>
            <div className="line-squared vivify fadeIn delay-200"/>
            <h5 className="brand vivify flipInX delay-150 mt-2">{props.oneHack.name} </h5>
        </div>
    );
}

export default CardHackathons;
