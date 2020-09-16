import React, {useState} from 'react';
import "./contact.sass";
import Label from "reactstrap/es/Label";
import {Control, Errors, LocalForm} from "react-redux-form";
import axios from "axios";
import {baseUrl} from "../../shared/baseUrl";
import Loader from "../loader/Loader";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function Contact() {
    const [contactSent, setContactSent] = useState(false);
    const [contactWrong, setContactWrong] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendContact = (data) => {
        setLoading(true);
        return axios.post(baseUrl + `auth/contact`, data)
            .then(response => {
                    console.log(response.status);
                    if (response.status === 200 || 201) {
                        setContactSent(true);
                        setContactWrong(false);
                        setLoading(false);
                    } else {
                        setLoading(false);
                        setContactWrong(true);
                        setContactSent(false);
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    throw error;
                })

            .catch(error =>{
                console.log(error.message);
                setContactWrong(true);
            })
    };

    const handleSubmit = values => {
        var data = {
            fullName: values.name,
            email: values.email,
            phone: values.num,
            message: values.message,
        };
        sendContact(data)

    };

    return (
        <div className="container middle-content">
            <div className="row d-flex justify-content-center ">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <img className="img-fluid vivify pullUp " src={require("../../img/contact_us.png")} alt=""/>
                    <h1 className="text-center  vivify flipInX delay-250 big-titles my-3">
                        “There is no key to open the
                        <span className="red-colored big-titles"> heart </span>
                        of another - except
                        <span className="red-colored big-titles"> curiosity </span>
                        .”
                    </h1>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 vivify fadeIn ">
                    <h2 className=" vivify flipInX delay-250 small-titles">
                        We are happy to hear from
                        <span className="red-colored h2-like"> you</span>
                    </h2>
                    {contactSent ? (
                        <span className=" vivify flipInX delay-250 small-titles  ">
                            Your email is sent succefully
                        </span>
                    ) : null}
                    {contactWrong ? (
                        <h2 className=" vivify flipInX delay-250  red-colored ">
                            Something went wrong! Please resent us your message
                        </h2>
                    ) : null}
                    {!loading ? (
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
                            <button type="submit" className="button button-reg-log row mx-auto d-flex mb-3">
                                Send
                            </button>
                        </LocalForm>

                    ) : (
                        <div className="mx-auto my-5 vertical-center">
                            <Loader/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
