import React, {Component} from 'react';
import "./add-hackathon.sass";
import {Control, Errors, LocalForm} from "react-redux-form";
import Label from "reactstrap/es/Label";
import Datepicker from "react-datepicker";
import ModalBody from "reactstrap/es/ModalBody";
import ImageUploader from 'react-images-upload';
import Loader from "../loader/Loader";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class AddHackathon extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDropCover = this.onDropCover.bind(this);
        this.state = {
            dateDebut: new Date(),
            dateFin: new Date(),
            pictures: [],
            cover: null
        }
    }


    handleSubmit (values)   {
        const data = {
            name : values.name,
            emplacement: values.emplacement,
            description: values.description,
            cible: values.cible,
            prizes: !!(values.firstPlace || values.secondPlace || values.thirdPlace),
            prizescontent: [
                {firstPlace: values.firstPlace},
                {secondPlace: values.secondPlace},
                {thirdPlace: values.thirdPlace},
            ],
            linkFB : values.linkFB,
            linkIN : values.linkIN,
            linkTW : values.linkTW,
            linkLN : values.linkLN,
            photos: this.state.pictures[0].name,
            author: this.props.user.fullName,
            dateDebut: this.state.dateDebut,
            dateFin: this.state.dateFin,
            image: this.state.cover[0].name
        };
        this.props.addHackathon(data);
    };

    onDrop(pictureFiles) {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
    }

    onDropCover(picture) {
        this.setState({
            cover: picture
        });
    }
    render() {
        return (
            <div className="container middle-content ">
                <div className="row d-flex justify-content-center col-12 col-md-10 col-lg-8 mx-auto">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <img className="img-fluid vivify pullUp add-hack-image d-flex mx-auto mb-4" src={require("../../img/what-hackathons.png")} alt=""/>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 vivify fadeIn my-auto add-hackathon-text-wrapper ">
                    <span className=" vivify flipInX delay-250 small-titles add-hackathon-text font-weight-bold ">
                        Add a new Hackathon and let
                        the players <span className="red-colored small-titles font-weight-bold">live</span> the experience
                        <br/>
                        <br/>
                        - Play, Compete, <span className="red-colored small-titles font-weight-bold">Win</span>
                    </span>
                    </div>
                </div>
                {this.props.isAdded ? (
                    <div className="container vivify pullUp middle-content vertical-center ">
                        <h2 className="text-center small-titles ">Your hackathon is added successfuly, you can check through Hackathons.</h2>
                        <div className=" row vivify fadeIn d-flex justify-content-center text-center  ">
                                <a className="button row mx-5"
                                        data-toggle="modal"
                                        href="/hackathons"
                                        >
                                    Hackathons
                                </a>
                                <a className="button  row mx-5"
                                   href="/"
                                >
                                    Home
                                </a>
                        </div>
                    </div>
                    ) : (
                        <>
                            {this.props.isLoading ? (
                                <div className="mx-auto my-5">
                                    <Loader/>
                                </div>
                            ) : (
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="col-12 col-md-10 col-lg-8 mx-auto py-5 px-2">
                                    <div className="form-group mx-3">
                                        <Label htmlFor="name" className="label">Name</Label>
                                        <Control.text model=".name"
                                                      id="name"
                                                      name="name"
                                                      type="text"
                                                      className="form-control input"
                                                      placeholder="Name"
                                                      validators={{
                                                          required, minLength: minLength(2)
                                                      }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required -- ',
                                                minLength: 'Must be greater than 2 characters',
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mx-3">
                                        <Label htmlFor="email" className="label">Place</Label>
                                        <Control.text model=".emplacement"
                                                      id="emplacement"
                                                      name="emplacement"
                                                      className="form-control input"
                                                      placeholder="Place"
                                                      validators={{
                                                          required
                                                      }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".emplacement"
                                            show="touched"
                                            messages={{
                                                required: 'Required -- ',
                                            }}
                                        />
                                    </div>

                                    <div className="row ">
                                        <div className="col-12 col-lg-6 mx-auto px-5 ">
                                            <Label className="label col-12">Date from</Label>
                                            <Datepicker
                                                dateFormat="yyyy/MM/dd"
                                                className="input form-control "
                                                selected={this.state.dateDebut}
                                                onChange={date => this.setState({
                                                    dateDebut: date
                                                })}
                                                selectsStart
                                                startDate={this.state.dateDebut}
                                                endDate={this.state.dateFin}
                                            />
                                        </div>

                                        <div className="col-12 col-lg-6  mx-auto px-5 mb-3">
                                            <Label className="label col-12">Date to</Label>
                                            <Datepicker
                                                dateFormat="yyyy/MM/dd"
                                                className="input form-control  "
                                                selected={this.state.dateFin}
                                                onChange={date => this.setState({
                                                    dateFin: date
                                                })}
                                                selectsEnd
                                                startDate={this.state.dateDebut}
                                                endDate={this.state.dateFin}
                                                minDate={this.state.dateDebut}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mt-5 col-12 col-lg-6 col-md-8 mx-auto">
                                        <Label  className="label">Cover Image</Label>
                                        <ImageUploader
                                            withPreview={true}
                                            withIcon={true}
                                            label="Add your photos"
                                            buttonText="Add your photos"
                                            onChange={this.onDropCover}
                                            imgExtension={['.jpg', '.png', 'jpeg']}
                                            maxFileSize={5242880}
                                            fileSizeError="Photo size is too big"
                                            singleImage="true"
                                        />
                                    </div>

                                    <div className="form-group mx-3">
                                        <Label htmlFor="description" className="label">Event Description</Label>
                                        <Control.textarea maxLength="500" model=".description"
                                                          id="description"
                                                          name="description"
                                                          className="form-control input textarea"
                                                          placeholder="Event Description"
                                                          validators={{
                                                              required
                                                          }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".description"
                                            show="touched"
                                            messages={{
                                                required: 'Required -- ',
                                            }}
                                        />
                                    </div>

                                    <div className="form-group mx-3">
                                        <Label htmlFor="description" className="label">Who can attend ?</Label>
                                        <Control.textarea maxLength="500" model=".cible"
                                                          id="cible"
                                                          name="cible"
                                                          className="form-control input textarea"
                                                          placeholder="Who can attend"
                                                          validators={{
                                                              required
                                                          }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".cible"
                                            show="touched"
                                            messages={{
                                                required: 'Required -- ',
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mx-3">
                                        <Label htmlFor="description" className="label">Prizes ( Not obligatory )</Label>
                                        <div className="row mx-auto mt-2 col-12 col-md-10 col-lg-8">
                                            <Label htmlFor="firstPlace" className="label col-12 col-lg-6 col-md-6 my-auto red-colored">First Place</Label>
                                            <Control.text  model=".firstPlace"
                                                           id="firstPlace"
                                                           name="firstPlace"
                                                           className="form-control input col-12 col-lg-6 col-md-6 "
                                                           placeholder="First Place"

                                            />
                                        </div>

                                        <div className="row mx-auto mt-2 col-12 col-md-10 col-lg-8 mt-3">
                                            <Label htmlFor="secondPlace" className="label col-12 col-lg-6 col-md-6 my-auto red-colored">Second Place</Label>
                                            <Control.text  model=".secondPlace"
                                                           id="secondPlace"
                                                           name="secondPlace"
                                                           className="form-control input col-12 col-lg-6 col-md-6 "
                                                           placeholder="Second Place"

                                            />
                                        </div>

                                        <div className="row mx-auto mt-2 col-12 col-md-10 col-lg-8 mt-3">
                                            <Label htmlFor="thirdPlace" className="label col-12 col-lg-6 col-md-6 my-auto red-colored">Third Place</Label>
                                            <Control.text  model=".thirdPlace"
                                                           id="thirdPlace"
                                                           name="thirdPlace"
                                                           className="form-control input col-12 col-lg-6 col-md-6 "
                                                           placeholder="Third Place"

                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mx-3">
                                        <Label  className="label">Links ( Not obligatory )</Label>
                                        <div className="row mx-auto col-12 mt-5">
                                            <Label htmlFor="linkFB" className=" links-logo fa fa-facebook fa-2x label col-1 my-auto "/>
                                            <Control.text model=".linkFB"
                                                          id="linkFB"
                                                          name="linkFB"
                                                          className="form-control input col-lg-11 col-md-11 col-10   "
                                                          placeholder="Facebook Link"

                                            />
                                        </div>

                                        <div className="row mx-auto col-12 mt-5">
                                            <Label htmlFor="linkLN" className="links-logo fa fa-linkedin fa-2x label col-1 my-auto "/>
                                            <Control.text model=".linkLN"
                                                          id="linkLN"
                                                          name="linkLN"
                                                          className="form-control input col-lg-11 col-md-11 col-10   "
                                                          placeholder="Linkedin Link"

                                            />
                                        </div>

                                        <div className="row mx-auto col-12 mt-5">
                                            <Label htmlFor="linkIN" className="links-logo fa fa-instagram fa-2x label col-1 my-auto "/>
                                            <Control.text model=".linkIN"
                                                          id="linkIN"
                                                          name="linkIN"
                                                          className="form-control input col-lg-11 col-md-11 col-10   "
                                                          placeholder="Instagram Link"

                                            />
                                        </div>

                                        <div className="row mx-auto col-12 mt-5">
                                            <Label htmlFor="linkTW" className="links-logo fa fa-twitter fa-2x label col-1 my-auto "/>
                                            <Control.text model=".linkTW"
                                                          id="linkTW"
                                                          name="linkTW"
                                                          className="form-control input col-lg-11 col-md-11 col-10   "
                                                          placeholder="Twitter Link"

                                            />
                                        </div>

                                    </div>
                                    <div className="form-group mt-5 col-12 col-lg-6 col-md-8 mx-auto">
                                        <Label  className="label">Photos ( Not obligatory )</Label>
                                        <ImageUploader
                                            withPreview={true}
                                            withIcon={true}
                                            label="Add your photos"
                                            buttonText="Add your photos"
                                            onChange={this.onDrop}
                                            imgExtension={['.jpg', '.png', 'jpeg']}
                                            maxFileSize={5242880}
                                            fileSizeError="Photo size is too big"
                                        />
                                    </div>



                                    <button type="submit" className="button button-reg-log row mx-auto d-flex mb-3">
                                        Submit
                                    </button>
                                </LocalForm>

                            ) }
                        </>
                ) }

            </div>
        );
    }

}

export default AddHackathon;
