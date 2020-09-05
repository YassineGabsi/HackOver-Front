import React, {Component} from 'react';
import "./register.sass";
import {Control, Errors, LocalForm} from "react-redux-form";
import Label from "reactstrap/es/Label";
import ImageUploader from 'react-images-upload';
import Loader from "../loader/Loader";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Register extends Component {
    constructor(props) {
        super(props);
        this.openParticipant = this.openParticipant.bind(this);
        this.openOrganizator = this.openOrganizator.bind(this);
        this.openButtons = this.openButtons.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.handleEmailVerif = this.handleEmailVerif.bind(this);
        this.input = React.createRef();
        this.state = {
            participant: false,
            organizator: false,
            buttons: true,
            isValid: true,
            pictures: []
        };
    }

    onDrop(pictureFiles) {
        this.setState({
            pictures: pictureFiles
        });
    }

    handleEmailVerif() {
        console.log(this.input.current.value);
    }

    handleSubmit(values) {
        if (values.password === values.conf_password) {
            this.setState({
                isValid: true
            });
            const data = {
                fullName: values.name,
                email: values.email,
                password: values.password,
                confirmPassword: values.conf_password,
                phone: values.num,
                age: this.state.participant ? values.age : "22",
                domain: values.work,
                city: values.city,
                sex: this.state.participant ? values.gender : "Male",
                picture: this.state.pictures[0] ? this.state.pictures[0].name : '',
                role: this.state.participant ? "Participant" : "Organizator"
            };
            console.log(data);
            this.props.registerUser(data);
        } else {
            this.setState({
                isValid: false,
            })
        }
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
            buttons: true,
            isValid: true,
        });
    }

    render() {
        return (
            <>
                {!this.props.registration.isRegistered ? (
                    <div>
                        {this.state.buttons ? (
                            <div className="container vivify pullUp middle-content vertical-center">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-5 col-md-6 text-center">
                                        <button className="button row mx-auto" onClick={this.openOrganizator}>
                                            Organizator
                                        </button>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem
                                            ipsum
                                            dolor sit
                                            amet,
                                            consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet,
                                            consetetur
                                            sadipscing
                                            elitr,
                                            sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam
                                            nonumy</p>
                                    </div>
                                    <div className="col-lg-2  d-flex justify-content-center desktop-only">
                                        <div className="vertical-line"/>
                                    </div>
                                    <div className="col-lg-5 col-md-6 text-center">
                                        <button className="button row mx-auto" onClick={this.openParticipant}>
                                            Participant
                                        </button>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyLorem
                                            ipsum
                                            dolor sit
                                            amet,
                                            consetetur sadipscing elitr, sed diam nonumyLorem ipsum dolor sit amet,
                                            consetetur
                                            sadipscing
                                            elitr,
                                            sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam
                                            nonumy</p>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {this.state.participant ? (
                            <div className="container vivify pullUp middle-content ">
                                <div className="row col-12 d-flex justify-content-center">
                                    <button className="  button  row mx-auto" onClick={this.openButtons}>
                                        Change
                                    </button>
                                    <h2 className=" col-12 text-center mx-auto vivify flipInX delay-150 mt-3  ">
                                        We are happy to have
                                        <span className="red-colored h2-like"> you </span>
                                        with us
                                    </h2>

                                    <p className=" col-12 small-titles text-center mx-auto vivify flipInX delay-150 ">
                                        Sign up as a Participant
                                    </p>
                                    {!this.state.isValid ? (
                                        <h3 className="text-center red-colored col-12 mx-auto text-size">Password and
                                            Confirm password fields don't match</h3>

                                    ) : null}
                                    {this.props.registration.isLoading ? (
                                        <div className="mx-auto my-5">
                                            <Loader/>
                                        </div>
                                    ) : (
                                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}
                                                   className="col-lg-7 col-md-9 col-sm-12 col-xs-12">
                                            <div className="form-group mx-3 ">
                                                <Label htmlFor="name" className="label">Full Name</Label>
                                                <Control.text model=".name"
                                                              id="name"
                                                              name="name"
                                                              type="text"
                                                              className="form-control input"
                                                              placeholder="Full Name"
                                                              validators={{
                                                                  required,
                                                                  minLength: minLength(2),
                                                                  maxLength: maxLength(18)
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
                                                        validEmail: 'Must be a valid Email address',
                                                    }}
                                                />

                                            </div>


                                            <div className="form-group mx-3">
                                                <Label htmlFor="password" className="label">Password</Label>
                                                <Control.text model=".password"
                                                              id="password"
                                                              type="password"
                                                              name="password"
                                                              className="form-control input"
                                                              placeholder="Password"
                                                              validators={{
                                                                  required
                                                              }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".password"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required -- ',
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group mx-3">
                                                <Label htmlFor="conf_password" className="label">Confirm
                                                    Password</Label>
                                                <Control.text model=".conf_password"
                                                              id="conf_password"
                                                              type="password"
                                                              name="conf_password"
                                                              className="form-control input"
                                                              placeholder="Confirm Password"
                                                              validators={{
                                                                  required
                                                              }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".conf_password"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required -- ',
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mx-3">
                                                <Label htmlFor="num" className="label">Phone Number</Label>
                                                <Control.text model=".num"
                                                              id="num"
                                                              name="num"
                                                              type="number"
                                                              className="form-control input"
                                                              placeholder="Phone Number"
                                                              validators={{
                                                                  required,
                                                                  minLength: minLength(8),
                                                                  maxLength: maxLength(15),
                                                                  isNumber
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
                                                <Label htmlFor="work" className="label">Work / Study field</Label>
                                                <Control.text model=".work"
                                                              id="work"
                                                              name="work"
                                                              className="form-control input"
                                                              placeholder="Work / Study field"
                                                              validators={{
                                                                  required,
                                                              }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".work"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required -- ',
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mx-3">
                                                <Label htmlFor="age" className="label">Age</Label>
                                                <Control.text model=".age"
                                                              id="age"
                                                              name="age"
                                                              type="number"
                                                              className="form-control input"
                                                              placeholder="Age"
                                                              validators={{
                                                                  required,
                                                                  maxLength: maxLength(3),
                                                                  isNumber
                                                              }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".age"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required -- ',
                                                        maxLength: 'Must be less than 100 years',
                                                        isNumber: 'Must be a valid number'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mx-3">
                                                <Label htmlFor="image" className="label">Profile Photo</Label>
                                                <ImageUploader
                                                    withPreview={true}
                                                    withIcon={true}
                                                    label="Add your photo"
                                                    buttonText="Add your photo"
                                                    onChange={this.onDrop}
                                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                    maxFileSize={5242880}
                                                    fileSizeError=" file size is too big"
                                                    singleImage="true"
                                                />
                                            </div>

                                            <div className="form-group mx-3">

                                                <Control.radio model=".gender" checked="checked" value="Male"/>
                                                <Label htmlFor="gender" className="label mx-3 ">Male</Label>

                                                <Control.radio model=".gender" checked="checked" value="Female"/>
                                                <Label htmlFor="gender" className="label mx-3">Female</Label>
                                            </div>
                                            <button type="submit"
                                                    className="button button-reg-log row mx-auto d-flex mb-3">
                                                Send
                                            </button>
                                        </LocalForm>

                                    )}

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
                                        <span className="red-colored h2-like"> you </span>
                                        with us
                                    </h2>
                                    <p className=" col-12 small-titles text-center mx-auto vivify flipInX delay-150 ">
                                        Sign up as an Organization
                                    </p>
                                    {!this.state.isValid ? (
                                        <h3 className="text-center red-colored col-12 mx-auto text-size">Password and
                                            Confirm password fields don't match</h3>

                                    ) : null}
                                    {this.props.registration.isLoading ? (
                                        <div className="mt-5">
                                            <Loader/>
                                        </div>
                                    ) : (
                                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}
                                                   className="col-lg-7 col-md-9 col-sm-12 col-xs-12">
                                            <div className="form-group mx-3 ">
                                                <Label htmlFor="name" className="label">Full Name</Label>
                                                <Control.text model=".name"
                                                              id="name"
                                                              name="name"
                                                              type="text"
                                                              className="form-control input"
                                                              placeholder="Full Name"
                                                              validators={{
                                                                  required,
                                                                  minLength: minLength(2),
                                                                  maxLength: maxLength(18)
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
                                                        validEmail: 'Must be a valid Email address',
                                                    }}
                                                />

                                            </div>


                                            <div className="form-group mx-3">
                                                <Label htmlFor="password" className="label">Password</Label>
                                                <Control.text model=".password"
                                                              id="password"
                                                              type="password"
                                                              name="password"
                                                              className="form-control input"
                                                              placeholder="Password"
                                                              validators={{
                                                                  required
                                                              }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".password"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required -- ',
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group mx-3">
                                                <Label htmlFor="conf_password" className="label">Confirm
                                                    Password</Label>
                                                <Control.text model=".conf_password"
                                                              id="conf_password"
                                                              type="password"
                                                              name="conf_password"
                                                              className="form-control input"
                                                              placeholder="Confirm Password"
                                                              validators={{
                                                                  required
                                                              }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".conf_password"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required -- ',
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mx-3">
                                                <Label htmlFor="num" className="label">Phone Number</Label>
                                                <Control.text model=".num"
                                                              id="num"
                                                              name="num"
                                                              type="number"
                                                              className="form-control input"
                                                              placeholder="Phone Number"
                                                              validators={{
                                                                  required,
                                                                  minLength: minLength(8),
                                                                  maxLength: maxLength(15),
                                                                  isNumber
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
                                                <Label htmlFor="work" className="label">Domain</Label>
                                                <Control.text model=".work"
                                                              id="work"
                                                              name="work"
                                                              className="form-control input"
                                                              placeholder="Domain"
                                                />
                                            </div>

                                            <div className="form-group mx-3">
                                                <Label htmlFor="city" className="label">City</Label>
                                                <Control.select model=".city"
                                                                className="input"
                                                                id="city"
                                                                >
                                                    <option value="monastir">monastir</option>
                                                    <option value="tunis">tunis</option>
                                                    <option value="mahdia">mahdia</option>
                                                </Control.select>
                                            </div>
                                            <div className="form-group mx-3">
                                                <Label htmlFor="image" className="label">Profile Photo</Label>
                                                <ImageUploader
                                                    withPreview={true}
                                                    withIcon={true}
                                                    label="Add your photo"
                                                    buttonText="Add your photo"
                                                    onChange={this.onDrop}
                                                    imgExtension={['.jpg', '.png', 'jpeg']}
                                                    maxFileSize={5242880}
                                                    fileSizeError="Photo size is too big"
                                                    singleImage="true"
                                                />
                                            </div>
                                            <button type="submit"
                                                    className="button button-reg-log row mx-auto d-flex mb-3">
                                                Send
                                            </button>
                                        </LocalForm>

                                    )}


                                </div>
                            </div>
                        ) : null}
                    </div>
                ) : (
                    <div className="container vivify pullUp middle-content vertical-center">
                        <h2 className="text-center small-titles ">Thank you for joining us. There still only one step to
                            complete your registration, please check your mail and put the code sent to you.</h2>
                        <div className="row d-flex justify-content-center">
                            <div className="line-squared mt-3 mb-5"/>
                        </div>
                        <div className="row col-lg-6 col-md-8 col-12 mx-auto justify-content-center">
                            <Label className="label">Verification Code</Label>
                            <p className="red-colored col-12 text-center text-size">The code must be 4 digits
                                length.</p>

                            <input type="text"
                                   className="input"
                                   placeholder="Code"
                                   ref={this.input}
                            />
                            <Label className="label col-12 mt-3">Email not sent ? <a className="red-colored"
                                                                                     onClick={console.log("Resend email")}>
                                Resend. </a>
                            </Label>
                        </div>

                        <button onClick={this.handleEmailVerif}
                                className="button button-reg-log row mx-auto d-flex mt-4">
                            Send
                        </button>
                    </div>
                )}
            </>

        );
    }
}

export default Register;
