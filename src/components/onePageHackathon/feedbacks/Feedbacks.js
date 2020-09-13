import React from 'react';
import "./feedbacks.sass";

function Feedbacks(props) {

    const deleteFeed = () => {
        props.deleteFeedback(props.oneHack._id, props.feedback._id)
    };

    return (
        <div>
            <div className=" row  mx-auto" style={{padding: "8px 8px 8px 0"}}>
                <div className="user-circle "/>
                <div className="row">
                    <p className="brand" style={{paddingLeft: "30px", paddingTop: "5px"}}>{props.feedback.author.fullName}
                        <br/>
                        <span style={{fontSize: "1rem", color: "white"}}> {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                        }).format(new Date(props.feedback.createdAt))}</span>
                    </p>
                </div>
            </div>
            <p className="text-size">{props.feedback.comment}</p>
            {props.user._id === props.feedback.author._id ? (
                <>
                    <button className="button button-reg-log  mx-3 vivify fadeIn delay-200"
                        onClick={deleteFeed}>
                        Delete
                    </button>
                    <button className="button button-reg-log  mx-3 vivify fadeIn delay-200">
                        Update
                    </button>
                </>
            ) : null}
            <hr/>
        </div>
    );
}

export default Feedbacks;
