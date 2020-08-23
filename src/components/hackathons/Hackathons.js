import React from 'react';
import "./hackathons.sass";
import CardHackathons from "./cardHackathons/CardHackathons";

function Hackathons(props) {
    return (
        <div className="container">
            <div className="row">
                {props.hackathons.map((hackathon) => {
                    return (
                        <CardHackathons
                            oneHack={hackathon}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Hackathons;
