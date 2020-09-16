import React from 'react';
import "./footer.sass";

function Footer () {
    return(
        <footer className="vivify fadeIn delay-150">
            <div className="container">
                <div className="row log-and-reg col-lg-6 col-md-8 col-sm-12">
                    <h1 className="page-name tablet-and-desktop-only vivify popIn delay-250">Live the experience</h1>
                </div>
            </div>
            <div className="mid"/>
            <div className="right">
                <div className="mt-3" >
                    <i className="fa fa-facebook ml-3 mr-1 fa-lg" aria-hidden="true"/>
                    <i className="fa fa-instagram ml-3 mr-1 fa-lg" aria-hidden="true"/>
                    <i className="fa fa-linkedin ml-3 mr-1 fa-lg" aria-hidden="true"/>
                    <i className="fa fa-twitter ml-3 mr-1 fa-lg" aria-hidden="true"/>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
