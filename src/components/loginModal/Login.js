import React, {Component} from 'react';
import "./login.sass";
import Modal from "reactstrap/es/Modal";
import ModalBody from "reactstrap/es/ModalBody";
import ModalHeader from "reactstrap/es/ModalHeader";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";

import {Control, LocalForm, Errors, Field} from 'react-redux-form';
import Row from "reactstrap/es/Row";
import Button from "reactstrap/es/Button";
import Loader from "../loader/Loader";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRevealPassword: false,
            empty: false,
            resetPass: false,
            resetSent: false,
            errMess: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        this.toggleResetPass = this.toggleResetPass.bind(this);
        this.togglePassword = this.togglePassword.bind(this);

    }

    togglePassword () {
        this.setState({
            isRevealPassword: !this.state.isRevealPassword
        })
    }


    toggleResetPass() {
        this.setState({
                resetPass: !this.state.resetPass
            }
        );
    }

    handleResetSubmit(values) {
        this.setState({
            resetSent: true
        });
        console.log(values.emailReset);
    }

    handleSubmit(values) {
        if (!values.email || !values.password)
            this.setState({empty: true, errMess: null});
        else {
            this.setState({submitted: true , empty: false});
            const creds = {email: values.email, password: values.password};
            if (values.email && values.password){
                this.props.loginUser(creds);
            }
            console.log(this.props.auth.errMess);
        }
    };

    render() {
        return (
            <>
                {!this.props.auth.isAuthenticated ? (
                    <Modal isOpen="active">
                        <div className="align-items-center modal-header">
                            <img src={require("../../img/logo.png")} className="mx-auto col-7 top-logo" alt=""/>
                            <button type="button" className="close close-button float-right" data-dismiss="modal"
                                    onClick={this.props.loginModalClose}>&times;
                            </button>
                        </div>
                        {this.state.resetPass ? (
                            <ModalBody className="align-items-center">
                                <h2 className="text-center vivify flipInX delay-150">Reset your password</h2>
                                <div className="row d-flex justify-content-center">
                                    <div className="line-squared my-3"/>
                                </div>

                                {this.state.resetSent ? (
                                    <Label className="label col-12 text-center mt-5">
                                        We sent you an email confirmation, please check your email box to set your new password
                                    </Label>
                                ) : (
                                    <LocalForm onSubmit={(values) => this.handleResetSubmit(values)}>
                                        <div className="form-group mx-3">
                                            <Label htmlFor="email" className="label">Put your Email</Label>
                                            <Control.text model=".emailReset" type="email"
                                                          id="emailReset"
                                                          name="emailReset"
                                                          className="form-control input"
                                                          placeholder="Email"
                                            />
                                        </div>
                                        <Label className="label col-12">Not registered yet?
                                            <a className="red-colored"
                                               href="/register"> Register
                                            </a>
                                        </Label>

                                        <Label className="label col-12">Remember Password?
                                            <a className="red-colored"
                                               onClick={this.toggleResetPass}> Login
                                            </a>
                                        </Label>
                                        <button type="submit" className="button button-reg-log row mx-auto d-flex mb-3">
                                            Send
                                        </button>
                                    </LocalForm>
                                )}
                            </ModalBody>
                        ) : (
                            <ModalBody className="align-items-center">
                                <h2 className="text-center vivify flipInX delay-150 small-titles">Login to live the experience </h2>
                                <div className="row d-flex justify-content-center">
                                    <div className="line-squared my-3"/>
                                </div>
                                {this.props.auth.errMess && !this.state.empty ? (
                                    <span className="text-center red-colored text-size d-flex  ">Password or Email is incorrect! Please check your account informations.</span>
                                ) : null}
                                {this.state.empty  ? (
                                    <span className="text-center red-colored text-size  d-flex  ">Please fill out the missing fields.</span>
                                ) : null}
                                {this.props.auth.isLoading ? (
                                    <div className="my-5 vertical-center">
                                        <Loader/>
                                    </div>
                                ) : (
                                    <>
                                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                            <div className="form-group mx-3">
                                                <Label htmlFor="email" className="label">Email</Label>
                                                <Control.text model=".email" type="email"
                                                              id="email"
                                                              name="email"
                                                              className="form-control input"
                                                              placeholder="Email"
                                                />
                                            </div>
                                            <div className="form-group mx-3">
                                                <Label htmlFor="password" className="label">Password</Label>
                                                {this.state.isRevealPassword ? (
                                                    <span className="fa fa-eye-slash reveal-pass-icon ml-3 mb-1 fa-lg" onClick={this.togglePassword}/>
                                                ) : (
                                                    <span className="fa fa-eye reveal-pass-icon ml-3 mb-1 fa-lg" onClick={this.togglePassword}/>
                                                )}
                                                <Control.text model=".password"
                                                              id="password"
                                                              name="password"
                                                              type= {this.state.isRevealPassword ? "text" : "password"}
                                                              className="form-control input"
                                                              placeholder="Password"
                                                >
                                                </Control.text>
                                            </div>
                                            <div className="form-group">
                                                <Label htmlFor="signedin" className="label">
                                                    <Control.checkbox model=".signedin"
                                                                      id="signedin"
                                                                      name="signedin"
                                                                      className="mx-4"
                                                    />
                                                    Stay signed in ?
                                                </Label>
                                            </div>
                                            <Label className="label col-12">Forget Password? <a className="red-colored"
                                                                                                onClick={this.toggleResetPass}> Reset
                                                your
                                                password</a></Label>
                                            <Label className="label col-12">Not registered yet? <a className="red-colored"
                                                                                                   href="/register"> Register</a></Label>

                                            <button type="submit" className="button button-reg-log row mx-auto d-flex mb-3">
                                                Login
                                            </button>
                                        </LocalForm>
                                        <div className="row d-flex justify-content-center mt-5">
                                            <div className="white-line-squared my-2 mx-3 tablet-and-desktop-only"/>
                                            <h5>Or</h5>
                                            <div className="white-line-squared my-2 mx-3 tablet-and-desktop-only"/>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <img className=" sign-in-img" src={require("../../img/facebook.svg")} alt=""/>
                                            </div>
                                            <div className="col-6">
                                                <img className=" img-fuild sign-in-img" src={require("../../img/google-plus.svg")}
                                                     alt=""/>
                                            </div>
                                        </div>
                                    </>
                                )}

                            </ModalBody>
                        )}
                    </Modal>

                ) : null}
            </>


        );
    }
}

export default Login;
