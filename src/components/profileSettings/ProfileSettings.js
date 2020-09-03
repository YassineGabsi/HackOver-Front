import React from 'react';
import "./profile-settings.sass";

function ProfileSettings(props) {
    var bg = require(`../../img/${props.user.picture}`);
    return (
        <div className="container middle-content ">
            <div className="profile-user-circle"  style={{backgroundImage: "url("+bg+") "}}/>
            <div className="row d-flex justify-content-center profile-rectangle">
                <div className="col-lg-5 col-md-5 ">
                    <p className="brand small-titles vivify flipInX delay-150 mt-3">Email</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <p className="text-size vivify flipInX delay-250 mt-2 ">{props.user.email}</p>

                    <p className="brand small-titles vivify flipInX delay-150 mt-3">Password</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <p className="text-size vivify flipInX delay-250 mt-2 ">***************</p>

                    <p className="brand small-titles vivify flipInX delay-150 mt-3">Phone Number</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <p className="text-size vivify flipInX delay-250 mt-2 ">{props.user.phone}</p>
                </div>
                <div className="col-lg-2 col-md-2 d-flex justify-content-center tablet-and-desktop-only">
                    <div className="vertical-line"/>
                </div>
                <div className="col-lg-5 col-md-5 ">
                    <p className="brand small-titles vivify flipInX delay-150 mt-3">Name</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <p className="text-size vivify flipInX delay-250 mt-2 ">{props.user.fullName}</p>

                    <p className="brand small-titles vivify flipInX delay-150 mt-3">City</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <p className="text-size vivify flipInX delay-250 mt-2 ">{props.user.city}</p>

                    <p className="brand small-titles vivify flipInX delay-150 mt-3">Domain</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <p className="text-size vivify flipInX delay-250 mt-2 ">{props.user.domain}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileSettings;
