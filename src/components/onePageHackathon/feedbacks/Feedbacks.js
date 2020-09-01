import React from 'react';
import "./feedbacks.sass";

function Feedbacks(props) {

    return (
        <div>
            <div className=" row  mx-auto" style={{padding: "8px 8px 8px 0"}}>
                <div className="user-circle "/>
                <div className="row">
                    <p className="brand" style={{paddingLeft: "30px", paddingTop: "5px"}}>{props.feedback.author}
                        <br/>
                        <span style={{fontSize: "1rem", color: "white"}}> {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                        }).format(new Date(props.feedback.date))}</span>
                    </p>

                </div>
            </div>

            <p className="text-size">"{props.feedback.comment}"</p>
        </div>
    );
}

export default Feedbacks;
