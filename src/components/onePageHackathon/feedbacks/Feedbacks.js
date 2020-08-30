import React from 'react';
import "./feedbacks.sass";

function Feedbacks(props) {
    return(
        <div>
            <p className="brand small-titles vivify flipInX delay-150 mt-3">Feedbacks</p>
            <div className="line-squared vivify fadeIn delay-200"/>
            <div className=" row text-center mx-auto" style={{padding: "8px 8px 8px 32px"}}>
                <div className="user-circle "/>
                <p className="mt-4 ml-3" style={{color: "white"}}>Your Name</p>
            </div>
        </div>
    );
}

export default Feedbacks;
