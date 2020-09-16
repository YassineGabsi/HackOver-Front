import React, {Component} from 'react';
import Label from "reactstrap/es/Label";
import {Control, LocalForm} from "react-redux-form";
import { withRouter } from "react-router-dom";
import Loader from "../loader/Loader";

class ChangeNewEmail extends Component {
    constructor(props) {
        super(props);
        this.handleChangeSubmit = this.handleChangeSubmit.bind(this);
        this.state = {
            emailValid: true
        }
    }

    handleChangeSubmit(values) {
        const {match: {params}} = this.props;
        var data = {
            email: values.email,
            confirmEmail: values.confirmEmail
        };
        if (values.email === values.confirmEmail) {
            this.props.changeNewEmail(data, params.token);
            this.setState({
                emailValid: true
            });
        } else {
            this.setState({
                emailValid: false
            });
        }
        console.log(values);
    }

    render() {
        return (
            <>
                {this.props.changeEmail.isLoading ? (
                    <div className="my-5 vertical-center">
                        <Loader/>
                    </div>
                ) : (

                    <div className="container vivify pullUp middle-content vertical-center">
                        <h2 className="text-center vivify flipInX delay-150">Change your Email</h2>
                        <div className="row d-flex justify-content-center">
                            <div className="line-squared my-3"/>
                        </div>
                        {this.props.changeEmail.isLoading ? (
                            <div className="my-5 vertical-center">
                                <Loader/>
                            </div>
                        ) : (
                            <>
                                {this.props.changeEmail.isEmailChanged ? (
                                    <Label className="label col-12 text-center mt-5">
                                        Your Email has been changed succefully, you can login now with your new email,
                                        Enjoy!
                                    </Label>
                                ) : (
                                    <>
                                        {!this.state.emailValid ? (
                                            <Label className="label col-12 text-center mt-5 red-colored">
                                                Your should type the same email in the two fields
                                            </Label>
                                        ) : null}
                                        <LocalForm onSubmit={(values) => this.handleChangeSubmit(values)}
                                                   className="col-lg-8 col-md-10 col-12  mx-auto">
                                            <div className="form-group mx-3">
                                                <Label htmlFor="password" className="label">New Email</Label>
                                                <Control.text model=".email" type="email"
                                                              id="password"
                                                              name="password"
                                                              className="form-control input"
                                                              placeholder="New Email"
                                                />
                                            </div>

                                            <div className="form-group mx-3">
                                                <Label htmlFor="confirm" className="label">Confirm New Email</Label>
                                                <Control.text model=".confirmEmail" type="email"
                                                              id="confirmEmail"
                                                              name="confirmEmail"
                                                              className="form-control input"
                                                              placeholder="Confirm New Email"
                                                />
                                            </div>

                                            <button type="submit"
                                                    className="button button-reg-log row mx-auto d-flex mb-3">
                                                Send
                                            </button>
                                        </LocalForm>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                )}
            </>
        );
    }
}

export default withRouter(ChangeNewEmail);
