import React, {Component} from 'react';
import "./profile-settings.sass";

class ProfileSettings extends Component {
    constructor(props) {
        super(props);
        this.bg = require(`../../img/${props.user.picture}`);
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.image = React.createRef();
    }

    uploadPhoto() {
        console.log(this.image.current.files[0].name);
    }

    upload() {
        document.getElementById("upload-photo").click()
    };

    render() {
        return (
            <div className="container middle-content ">
                <div className="profile-user-circle" style={{backgroundImage: "url(" + this.bg + ") "}}/>
                <a className=" text-size change-text" aria-hidden="true" onClick={this.upload}>
                    <i className="fa fa-pencil mr-3" aria-hidden="true"/>
                    Change photo
                </a>
                <input type="file"
                       id="upload-photo"
                       style={{display: "none"}}
                       name="file"
                       ref={this.image}
                       onChange={this.uploadPhoto}
                />
                <div className="row d-flex justify-content-center profile-rectangle">
                    <div className="col-lg-5 col-md-5 ">
                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Email</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        <div className="row col-12">
                            <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.email}</p>
                            <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"/>
                        </div>



                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Password</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        <div className="row col-12">
                            <p className="text-size vivify flipInX delay-250 mt-2 ">***************</p>
                            <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"/>
                        </div>

                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Phone Number</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        <div className="row col-12">
                            <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.phone}</p>
                            <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 d-flex justify-content-center tablet-and-desktop-only">
                        <div className="vertical-line"/>
                    </div>
                    <div className="col-lg-5 col-md-5 ">
                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Name</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        <div className="row col-12">
                            <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.fullName}</p>
                            <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"/>
                        </div>

                        <p className="brand small-titles vivify flipInX delay-150 mt-3">City</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        <div className="row col-12">
                            <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.city}</p>
                            <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"/>
                        </div>

                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Domain</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        <div className="row col-12">
                            <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.domain}</p>
                            <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProfileSettings;
