import React from 'react';
import "./contact.sass";
import Label from "reactstrap/es/Label";
import {Control, Errors, LocalForm} from "react-redux-form";
import Button from "reactstrap/es/Button";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


function Contact(props) {
    const handleSubmit = values => {
        console.log(JSON.stringify(values));
    };
    return (
        <div className="container middle-content">
            <div className="row d-flex justify-content-center ">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <img className="img-fluid vivify pullUp " src={require("../../img/contact_us.png")} alt=""/>
                    <h1 className="text-center  vivify flipInX delay-250 big-titles my-3">
                        “There is no key to open the
                        <span className="red-colored"> heart </span>
                        of another - except
                        <span className="red-colored"> curiosity </span>
                        .”
                    </h1>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 vivify fadeIn ">
                    <h2 className=" vivify flipInX delay-250 small-titles">
                        We are happy to hear from
                        <span className="red-colored"> you</span>
                    </h2>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <div className="form-group mx-3">
                            <Label htmlFor="name" className="label">Name</Label>
                            <Control.text model=".name"
                                          id="name"
                                          name="name"
                                          type="text"
                                          className="form-control input"
                                          placeholder="Name"
                                          validators={{
                                              required, minLength: minLength(2), maxLength: maxLength(18)
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: 'Required -- ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 18 characters or less'
                                }}
                            />
                        </div>
                        <div className="form-group mx-3">
                            <Label htmlFor="email" className="label">Email</Label>
                            <Control.text model=".email"
                                          id="email"
                                          name="email"
                                          className="form-control input"
                                          placeholder="Email"
                                          validators={{
                                              required, validEmail
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required -- ',
                                    validEmail: 'Invalid Email Address'
                                }}
                            />
                        </div>

                        <div className="form-group mx-3">
                            <Label htmlFor="num" className="label">Phone Number</Label>
                            <Control.text model=".num"
                                          id="num"
                                          name="num"
                                          className="form-control input"
                                          placeholder="Phone Number"
                                          validators={{
                                              required, minLength: minLength(8), maxLength: maxLength(15), isNumber
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".num"
                                show="touched"
                                messages={{
                                    required: 'Required -- ',
                                    minLength: 'Must be a valid phone number format',
                                    isNumber: 'Must be a number'
                                }}
                            />
                        </div>

                        <div className="form-group mx-3">
                            <Label htmlFor="message" className="label">Your message</Label>
                            <Control.textarea maxLength="500" model=".message"
                                              id="message"
                                              name="message"
                                              className="form-control input textarea"
                                              placeholder="Your message"
                                              validators={{
                                                  required
                                              }}
                            />
                            <Errors
                                className="text-danger"
                                model=".message"
                                show="touched"
                                messages={{
                                    required: 'Required -- ',
                                }}
                            />
                        </div>
                        <Button type="submit" className="button button-reg-log row mx-auto d-flex mb-3">
                            Send
                        </Button>
                    </LocalForm>
                </div>
            </div>
        </div>
    );
}

export default Contact;
