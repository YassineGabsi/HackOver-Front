import React, {Component} from 'react';
import "./profile-settings.sass";

class ProfileSettings extends Component {
    constructor(props) {
        super(props);
        this.bg = require(`../../img/${props.user.picture}`);
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePass = this.changePass.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeDomain = this.changeDomain.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.image = React.createRef();
        this.state = {
            changeEmail: false,
            changePass: false,
            changePhone: false,
            changeName: false,
            changeCity: false,
            changeDomain: false,
            changeAge: false,

            email: this.props.user.email

        }
    }
    changeEmail() {
        this.setState({
           changeEmail: !this.state.changeEmail
        });
    }
    changePass() {
        this.setState({
            changePass: !this.state.changePass
        });
    }
    changePhone() {
        this.setState({
            changePhone: !this.state.changePhone
        });
    }
    changeName() {
        this.setState({
            changeName: !this.state.changeName
        });
    }
    changeCity() {
        this.setState({
            changeCity: !this.state.changeCity
        });
    }
    changeDomain() {
        this.setState({
            changeDomain: !this.state.changeDomain
        });
    }
    changeAge() {
        this.setState({
            changeAge: !this.state.changeAge
        });
    }

    uploadPhoto() {
        console.log(this.image.current.files[0].name);
    }

    upload() {
        document.getElementById("upload-photo").click()
    };

    render() {
        return (
            <div className="container middle-content vivify fadeIn  ">
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
                            {this.state.changeEmail ? (
                                <>
                                    <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto "
                                           placeholder="Email" value={this.props.user.email}/>
                                    <a className="font-weight-bold text-size" onClick={this.changeEmail}>Cancel</a>
                                </>

                            ) : (
                                <>
                                    <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.email}</p>
                                    <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true" onClick={this.changeEmail}/>
                                </>
                            )}

                        </div>


                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Password</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        {this.state.changePass ? (
                            <>
                                <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                       placeholder="Email" value={this.props.user.password}/>
                                <a className="font-weight-bold text-size" onClick={this.changePass}>Cancel</a>
                            </>

                        ) : (
                            <div className="row col-12">
                                <p className="text-size vivify flipInX delay-250 mt-2 ">***************</p>
                                <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true" onClick={this.changePass}/>
                            </div>
                        )}


                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Phone Number</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        {this.state.changePhone ? (
                            <>
                                <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                       placeholder="Email" value={this.props.user.phone}/>
                                <a className="font-weight-bold text-size" onClick={this.changePhone}>Cancel</a>
                            </>
                        ) : (
                            <div className="row col-12">
                                <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.phone}</p>
                                <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true" onClick={this.changePhone}/>
                            </div>
                        )}


                    </div>
                    <div className="col-lg-2 col-md-2 d-flex justify-content-center tablet-and-desktop-only">
                        <div className="vertical-line vertical-center"/>
                    </div>
                    <div className="col-lg-5 col-md-5 ">
                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Name</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        {this.state.changeName ? (
                            <>
                                <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                       placeholder="Email" value={this.props.user.fullName}/>
                                <a className="font-weight-bold text-size" onClick={this.changeName}>Cancel</a>
                            </>
                        ) : (
                            <div className="row col-12">
                                <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.fullName}</p>
                                <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true" onClick={this.changeName}/>
                            </div>
                        )}
                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Domain</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        {this.state.changeDomain ? (
                            <>
                                <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                       placeholder="Email" value={this.props.user.domain}/>
                                <a className="font-weight-bold text-size" onClick={this.changeDomain}>Cancel</a>
                            </>
                        ) : (
                            <div className="row col-12">
                                <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.domain}</p>
                                <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true" onClick={this.changeDomain}/>
                            </div>
                        )}
                        {this.props.user.role === "Organizator" ? (
                            <>
                                <p className="brand small-titles vivify flipInX delay-150 mt-3">City</p>
                                <div className="line-squared vivify fadeIn delay-200"/>
                                {this.state.changeCity ? (
                                    <>
                                        <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                               placeholder="Email" value={this.props.user.city}/>
                                        <a className="font-weight-bold text-size" onClick={this.changeCity}>Cancel</a>
                                    </>
                                ) : (
                                    <div className="row col-12">
                                        <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.city}</p>
                                        <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true" onClick={this.changeCity}/>
                                    </div>
                                )}



                            </>
                        ) : (
                            <>
                                <p className="brand small-titles vivify flipInX delay-150 mt-3">Age</p>
                                <div className="line-squared vivify fadeIn delay-200"/>
                                {this.state.changeAge ? (
                                    <>
                                        <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                               placeholder="Email" value={this.props.user.age}/>
                                        <a className="font-weight-bold text-size" onClick={this.changeAge}>Cancel</a>
                                    </>
                                ) : (
                                    <div className="row col-12">
                                        <p className="text-size vivify flipInX delay-250 mt-2 ">{this.props.user.age}</p>
                                        <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true" onClick={this.changeAge}/>
                                    </div>
                                )}
                            </>
                        )}

                    </div>
                </div>
            </div>
        );
    }

}

export default ProfileSettings;
