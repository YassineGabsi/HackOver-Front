import React from 'react';
import "./notFound.sass";

function NotFound (props) {
    return(
        <div className="container middle-content">
            <div className="row d-flex justify-content-center">
                <h1 className=" col-lg-12 big-titles text-center vivify flipInX delay-150">Sorry! We couldn't find this page</h1>
                <div className=" col-12 vivify pullUp">
                    <img className=" img-fluid photo-404 mx-auto d-flex  " src={require("../../img/404.png")} alt=""/>
                </div>
                <div className=" row vivify fadeIn ">
                    <a className="button row mx-auto">
                        Home
                    </a>
                </div>
            </div>

        </div>
    );
}

export default NotFound;
