import React, {Component} from 'react';
import "./register.sass";
import {Control, LocalForm} from "react-redux-form";
import Label from "reactstrap/es/Label";
import Button from "reactstrap/es/Button";

class Register extends Component {
    constructor(props) {
        super(props);
        this.openParticipant = this.openParticipant.bind(this);
        this.openOrganizator = this.openOrganizator.bind(this);
        this.openButtons = this.openButtons.bind(this);
        this.state = {
            participant: false,
            organizator: false,
            buttons: true,
        };
    }

    handleSubmit(values) {
        console.log(JSON.stringify(values));
    }

    openOrganizator() {
        this.setState({
            organizator: !this.state.organizator,
            buttons: false
        });
    }

    openParticipant() {
        this.setState({
            participant: !this.state.participant,
            buttons: false
        });
    }


    openButtons() {
        this.setState({
            participant: false,
            organizator: false,
            buttons: true
        });
    }

    render() {
        return (
            <div>
                {this.state.buttons ? (
                    <div className="container vivify pullUp middle-content vertical-center">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-5 col-md-6 text-center">
                                <button className="button row mx-auto" onClick={this.openOrganizator}>
                                    Organizator
                                </button>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem ipsum
                                    dolor sit
                                    amet,
                                    consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet, consetetur
                                    sadipscing
                                    elitr,
                                    sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy</p>
                            </div>
                            <div className="col-lg-2  d-flex justify-content-center desktop-only">
                                <div className="vertical-line"/>
                            </div>
                            <div className="col-lg-5 col-md-6 text-center">
                                <button className="button row mx-auto">
                                    Participant
                                </button>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem ipsum
                                    dolor sit
                                    amet,
                                    consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet, consetetur
                                    sadipscing
                                    elitr,
                                    sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy</p>
                            </div>
                        </div>
                    </div>
                ) : null}

                {this.state.organizator ? (
                    <div className="container vivify pullUp middle-content ">
                        <div className="row col-12 d-flex justify-content-center">
                            <button className="  button  row mx-auto" onClick={this.openButtons}>
                                Change
                            </button>
                            <h2 className=" col-12 text-center mx-auto vivify flipInX delay-150 mt-3">
                                We are happy to have
                                <span className="red-colored"> you </span>
                                with us
                            </h2>

                            <LocalForm onSubmit={this.handleSubmit} className="col-lg-7 col-md-9 col-sm-12 col-xs-12">
                                <div className="form-group mx-3 ">
                                    <Label htmlFor="name" className="label">Name</Label>
                                    <Control.text model=".name"
                                                  id="name"
                                                  name="name"
                                                  type="text"
                                                  className="form-control input"
                                                  placeholder="Name"
                                    />
                                </div>
                                <div className="form-group mx-3">
                                    <Label htmlFor="email" className="label">Email</Label>
                                    <Control.text model=".email"
                                                  id="email"
                                                  name="email"
                                                  className="form-control input"
                                                  placeholder="Email"
                                    />
                                </div>

                                <div className="form-group mx-3">
                                    <Label htmlFor="num" className="label">Phone Number</Label>
                                    <Control.text model=".num"
                                                  id="num"
                                                  name="num"
                                                  className="form-control input"
                                                  placeholder="Phone Number"
                                    />
                                </div>

                                <div className="form-group mx-3">
                                    <Label htmlFor="message" className="label">Your message</Label>
                                    <Control.textarea maxLength="500" model=".message"
                                                      id="message"
                                                      name="message"
                                                      className="form-control input textarea"
                                                      placeholder="Your message"
                                    />
                                </div>
                                <Button type="submit" className="button button-reg-log row mx-auto d-flex mb-3">
                                    Send
                                </Button>
                            </LocalForm>


                        </div>
                    </div>
                ) : null}
            </div>

        );
    }
}

export default Register;
