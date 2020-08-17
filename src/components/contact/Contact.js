import React from 'react';
import "./contact.sass";
import Label from "reactstrap/es/Label";
import {Control, LocalForm} from "react-redux-form";
import Button from "reactstrap/es/Button";

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
                            />
                        </div>
                        <div className="form-group mx-3">
                            <Label htmlFor="email" className="label">Email</Label>
                            <Control.text  model=".email"
                                           id="email"
                                           name="email"
                                           className="form-control input"
                                           placeholder="Email"
                            />
                        </div>

                        <div className="form-group mx-3">
                            <Label htmlFor="num" className="label">Phone Number</Label>
                            <Control.text  model=".num"
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
        </div>
);
}

export default Contact;
