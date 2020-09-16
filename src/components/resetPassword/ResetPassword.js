import React, {Component} from 'react';
import Label from "reactstrap/es/Label";
import {Control, LocalForm} from "react-redux-form";
import { withRouter } from "react-router-dom";
import Loader from "../loader/Loader";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordValid: true
        }
    }

    handleResetSubmit(values) {
        const {match: {params}} = this.props;
        var data = {
            password: values.password,
            confirmPassword: values.confirmPassword
        };
        if (values.password === values.confirmPassword) {
            this.props.resetPassword(data, params.token);
            this.setState({
                passwordValid: true
            });
        } else {
            this.setState({
                passwordValid: false
            });
        }

        console.log(values);
    }

    render() {
        return (
            <>
                {this.props.reset.isLoading ? (
                    <div className="my-5 vertical-center">
                        <Loader/>
                    </div>
                ) : (
                    <div className="container vivify pullUp middle-content vertical-center">
                        <h2 className="text-center vivify flipInX delay-150">Reset your password</h2>
                        <div className="row d-flex justify-content-center">
                            <div className="line-squared my-3"/>
                        </div>
                        {this.props.reset.isLoading ? (
                            <div className="my-5 vertical-center">
                                <Loader/>
                            </div>
                        ) : (
                            <>
                                {this.props.reset.isPassReset ? (
                                    <Label className="label col-12 text-center mt-5">
                                        Your password has been changed succefully, you can login now with your new password,
                                        Enjoy!
                                    </Label>
                                ) : (
                                    <>
                                        {!this.state.passwordValid ? (
                                            <Label className="label col-12 text-center mt-5 red-colored">
                                                Your should type the same password in the two fields
                                            </Label>
                                        ) : null}
                                        <LocalForm onSubmit={(values) => this.handleResetSubmit(values)}
                                                   className="col-lg-8 col-md-10 col-12  mx-auto">
                                            <div className="form-group mx-3">
                                                <Label htmlFor="password" className="label">New Password</Label>
                                                <Control.text model=".password" type="password"
                                                              id="password"
                                                              name="password"
                                                              className="form-control input"
                                                              placeholder="New Password"
                                                />
                                            </div>

                                            <div className="form-group mx-3">
                                                <Label htmlFor="confirm" className="label">Confirm New Password</Label>
                                                <Control.text model=".confirmPassword" type="password"
                                                              id="confirmPassword"
                                                              name="confirmPassword"
                                                              className="form-control input"
                                                              placeholder="Confirm New Password"
                                                />
                                            </div>

                                            <button type="submit" className="button button-reg-log row mx-auto d-flex mb-3">
                                                Send
                                            </button>
                                        </LocalForm>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                ) }

            </>
        );
    }
}

export default withRouter(ResetPassword);
