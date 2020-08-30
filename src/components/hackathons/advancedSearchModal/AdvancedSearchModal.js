import React, {Component} from 'react';
import "./advSearch.sass";
import Modal from "reactstrap/es/Modal";
import ModalBody from "reactstrap/es/ModalBody";
import {Control, LocalForm} from "react-redux-form";
import Label from "reactstrap/es/Label";

class AdvancedSearchModal extends Component{
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <Modal isOpen="active">
                <div className="align-items-center modal-header">
                    <img src={require("../../../img/logo.png")} className="img-fluid " alt=""/>
                    <button type="button" className="close close-button float-right" data-dismiss="modal"
                            onClick={this.props.loginModalClose}>&times;
                    </button>

                </div>
                <ModalBody className="align-items-center">
                    <h2 className="text-center vivify flipInX delay-150">Login to live the experience </h2>
                    <div className="row d-flex justify-content-center">
                        <div className="line-squared my-3"/>
                    </div>
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
                            <Control.text model=".password"
                                          id="password"
                                          name="password"
                                          type="password"
                                          className="form-control input"
                                          placeholder="Password"
                            />
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
                        <Label className="label col-12">Forget Password? <a className="red-colored" href=""> Reset your
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
                        <div className="white-line-squared my-1 mx-3 tablet-and-desktop-only"/>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <img className=" sign-in-img" src={require("../../../img/facebook.svg")} alt=""/>
                        </div>
                        <div className="col-6">
                            <img className=" img-fuild sign-in-img" src={require("../../../img/google-plus.svg")} alt=""/>
                        </div>
                    </div>
                </ModalBody>
            </Modal>

        );

    }
}

export default AdvancedSearchModal;
