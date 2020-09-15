import React, {Component} from 'react';
import "./profile-settings.sass";
import {LocalForm} from "react-redux-form";
import Loader from "../loader/Loader";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ProfileSettings extends Component {
    constructor(props) {
        super(props);
        this.bg = `http://localhost:5000/uploads/user_${props.user.picture}`;
        console.log(this.bg);
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

        this.savePictChanges = this.savePictChanges.bind(this);

        this.changeEmail = this.changeEmail.bind(this);
        this.verifEmail = this.verifEmail.bind(this);

        this.changePasswordUser = this.changePasswordUser.bind(this);

        this.changePass = this.changePass.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeDomain = this.changeDomain.bind(this);
        this.changeAge = this.changeAge.bind(this);

        this.addEmail = this.addEmail.bind(this);
        this.oldPass = this.oldPass.bind(this);
        this.newPass = this.newPass.bind(this);
        this.confirmNewPass = this.confirmNewPass.bind(this);
        this.addPhone = this.addPhone.bind(this);
        this.addCity = this.addCity.bind(this);
        this.addDomain = this.addDomain.bind(this);
        this.addAge = this.addAge.bind(this);
        this.addName = this.addName.bind(this);

        this.cancelEmail = this.cancelEmail.bind(this);
        this.cancelName = this.cancelName.bind(this);
        this.cancelPhone = this.cancelPhone.bind(this);
        this.cancelCity = this.cancelCity.bind(this);
        this.cancelDomain = this.cancelDomain.bind(this);
        this.cancelAge = this.cancelAge.bind(this);

        this.image = React.createRef();

        this.state = {
            name: this.props.user.fullName,
            email: this.props.user.email,
            phone: this.props.user.phone,
            password: null,
            newPass: null,
            confirmNewPass: null,
            city: this.props.user.role === "Participant" ? '' : this.props.user.city,
            domain: this.props.user.domain,
            age: this.props.user.role === "Participant" ? this.props.user.age : '',

            changeEmail: this.props.changeEmail.isEmailGet,
            changePass: this.props.changePassword.isPassChanged ||this.props.changePassword.isPasswordWrong,
            changePhone: false,
            changeName: false,
            changeCity: false,
            changeDomain: false,
            changeAge: false,
        }
    }

    saveChanges() {
        var data = {
            fullName: this.state.name,
            phone: this.state.phone,
            city: this.state.city,
            domain: this.state.domain,
            age: this.state.age,
        };
        this.props.updateProfile(data, this.props.user._id);
        // window.location.reload(false);
    }
    savePictChanges() {
        console.log("hhh");
        let data = new FormData();
        data.append('file', this.image.current.files[0]);
        // console.log(this.state.selectedFile);
        this.props.updatePicture(data, this.props.user._id);

    }

    changePasswordUser() {

        var data = {
            newPassword: this.state.newPass,
            confirmNewPassword: this.state.confirmNewPass,
            oldConfirmPassword: this.state.password,
        };
        this.props.changePasswordAction(data, this.props.user.email);
    }

    verifEmail() {
        this.props.verifOldEmail(this.props.user.email);
        console.log(this.state.changeEmail);
        this.setState({
            changeEmail: true,
        });
        console.log(this.state.changeEmail);

    }

    changeEmail() {
        this.setState({
            changeEmail: !this.state.changeEmail,
        });
    }

    addEmail(e) {
        this.state.email = e.target.value;
    }

    cancelEmail() {
        this.setState({
            changeEmail: !this.state.changeEmail,
            email: this.props.user.email
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

    addPhone(e) {
        this.state.phone = e.target.value;
    }
    oldPass(e) {
        this.state.password = e.target.value;
    }
    newPass(e) {
        this.state.newPass = e.target.value;
    }
    confirmNewPass(e) {
        this.state.confirmNewPass = e.target.value;
    }

    cancelPhone() {
        this.setState({
            changePhone: !this.state.changePhone,
            phone: this.props.user.phone
        });
    }

    changeName() {
        this.setState({
            changeName: !this.state.changeName
        });
    }

    addName(e) {
        this.state.name = e.target.value;
    }

    cancelName() {
        this.setState({
            changeName: !this.state.changeName,
            name: this.props.user.fullName
        });
    }

    changeCity() {
        this.setState({
            changeCity: !this.state.changeCity
        });
    }

    addCity(e) {
        this.state.city = e.target.value;
    }

    cancelCity() {
        this.setState({
            changeCity: !this.state.changeCity,
            city: this.props.user.city
        });
    }

    changeDomain() {
        this.setState({
            changeDomain: !this.state.changeDomain
        });
    }

    addDomain(e) {
        this.state.domain = e.target.value;
    }

    cancelDomain() {
        this.setState({
            changeDomain: !this.state.changeDomain,
            domain: this.props.user.domain
        });
    }

    changeAge() {
        this.setState({
            changeAge: !this.state.changeAge
        });
    }

    addAge(e) {
        this.state.age = e.target.value;
    }

    cancelAge() {
        this.setState({
            changeAge: !this.state.changeAge,
            age: this.props.user.age
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
                            {this.props.changeEmail.isLoading ? (
                                <div className="my-5">
                                    <Loader/>
                                </div>
                            ) : (
                                <>
                                    {this.props.changeEmail.isEmailGet ? (
                                        <h2 className="text-size mt-3">We sent you an email change link on your old
                                            mail. Please check your Email</h2>
                                    ) : (
                                        <>
                                            <>
                                                <p className="text-size vivify flipInX delay-250 mt-2 ">{this.state.email}</p>
                                                <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"
                                                      onClick={this.verifEmail}/>
                                            </>
                                        </>
                                    )}
                                </>
                            )}


                        </div>


                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Password</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        {this.state.changePass ? (
                            <>
                                {this.props.changePassword.isLoading ? (
                                    <div className="my-5">
                                        <Loader/>
                                    </div>
                                ) : (
                                    <>
                                        {this.props.changePassword.isPassChanged ? (
                                            <h2 className="text-size mt-3  text-center">Your password has changed succefully!</h2>
                                        ) : null}
                                        {this.props.changePassword.isPasswordWrong ? (
                                            <h2 className="text-size mt-3 red-colored text-center">Something is wrong, Please check the infos you entered</h2>
                                        ) : null}
                                        <input type="password" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                               placeholder="Old Password" defaultValue={this.state.password} onChange={this.oldPass}/>
                                        <input type="password" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                               placeholder="New Password" defaultValue={this.state.newPass} onChange={this.newPass}/>
                                        <input type="password" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                               placeholder="Confrim New Password" defaultValue={this.state.confirmNewPass} onChange={this.confirmNewPass}/>
                                        <a className="font-weight-bold text-size" onClick={this.changePass}>Cancel</a>
                                        <a className="font-weight-bold text-size ml-3 red-colored"
                                           onClick={this.changePasswordUser}>Change</a>
                                        </>
                                )}
                            </>

                        ) : (
                            <div className="row col-12">
                                <p className="text-size vivify flipInX delay-250 mt-2 ">*****************</p>
                                <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"
                                      onClick={this.changePass}/>
                            </div>
                        )}


                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Phone Number</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        {this.state.changePhone ? (
                            <>
                                <input type="number" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                       placeholder="Phone" defaultValue={this.state.phone} onChange={this.addPhone}/>
                                <a className="font-weight-bold text-size" onClick={this.cancelPhone}>Cancel</a>
                                <a className="font-weight-bold text-size ml-3 red-colored"
                                   onClick={this.changePhone}>Change</a>

                            </>
                        ) : (
                            <div className="row col-12">
                                <p className="text-size vivify flipInX delay-250 mt-2 ">{this.state.phone}</p>
                                <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"
                                      onClick={this.changePhone}/>
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
                                       placeholder="Email" defaultValue={this.state.name} onChange={this.addName}/>
                                <a className="font-weight-bold text-size" onClick={this.cancelName}>Cancel</a>
                                <a className="font-weight-bold text-size ml-3 red-colored"
                                   onClick={this.changeName}>Change</a>
                            </>
                        ) : (
                            <div className="row col-12">
                                <p className="text-size vivify flipInX delay-250 mt-2 ">{this.state.name}</p>
                                <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"
                                      onClick={this.changeName}/>
                            </div>
                        )}
                        <p className="brand small-titles vivify flipInX delay-150 mt-3">Domain</p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        {this.state.changeDomain ? (
                            <>
                                <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                       placeholder="Email" defaultValue={this.state.domain} onChange={this.addDomain}/>
                                <a className="font-weight-bold text-size" onClick={this.cancelDomain}>Cancel</a>
                                <a className="font-weight-bold text-size ml-3 red-colored"
                                   onClick={this.changeDomain}>Change</a>

                            </>
                        ) : (
                            <div className="row col-12">
                                <p className="text-size vivify flipInX delay-250 mt-2 ">{this.state.domain}</p>
                                <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"
                                      onClick={this.changeDomain}/>
                            </div>
                        )}
                        {this.props.user.role === "Organizator" ? (
                            <>
                                <p className="brand small-titles vivify flipInX delay-150 mt-3">City</p>
                                <div className="line-squared vivify fadeIn delay-200"/>
                                {this.state.changeCity ? (
                                    <>
                                        <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                               placeholder="City" defaultValue={this.state.city}
                                               onChange={this.addCity}/>
                                        <a className="font-weight-bold text-size" onClick={this.cancelCity}>Cancel</a>
                                        <a className="font-weight-bold text-size ml-3 red-colored"
                                           onClick={this.changeCity}>Change</a>

                                    </>
                                ) : (
                                    <div className="row col-12">
                                        <p className="text-size vivify flipInX delay-250 mt-2 ">{this.state.city}</p>
                                        <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"
                                              onClick={this.changeCity}/>
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
                                               placeholder="Age" defaultValue={this.state.age} onChange={this.addAge}/>
                                        <a className="font-weight-bold text-size" onClick={this.cancelAge}>Cancel</a>
                                        <a className="font-weight-bold text-size ml-3 red-colored"
                                           onClick={this.changeAge}>Change</a>

                                    </>
                                ) : (
                                    <div className="row col-12">
                                        <p className="text-size vivify flipInX delay-250 mt-2 ">{this.state.age}</p>
                                        <span className="fa fa-pencil  ml-5 mt-3 fa-lg" aria-hidden="true"
                                              onClick={this.changeAge}/>
                                    </div>
                                )}
                            </>
                        )}

                    </div>
                </div>
                <button type="submit" className="button button-reg-log row mx-auto d-flex my-4"
                        onClick={this.saveChanges}>
                    Save Changes
                </button>
                <button type="submit" className="button button-reg-log row mx-auto d-flex my-4"
                        onClick={this.savePictChanges}>
                    Save Pict Changes
                </button>
            </div>
        );
    }

}

export default ProfileSettings;
