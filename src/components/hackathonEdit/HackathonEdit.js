import React, { Component } from 'react';
import "./hackathon-edit.sass";
import { LocalForm, Control } from "react-redux-form";
import Label from "reactstrap/es/Label";
import Datepicker from "react-datepicker";
import ImageUploader from "react-images-upload";
import Loader from "../loader/Loader";
import { withRouter } from "react-router-dom";
import axios from 'axios';


class HackathonEdit extends Component {
    constructor(props) {
        super(props);
        this.bg = `http://localhost:5000/uploads/user_${this.props.oneHack.picture}`;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.savePictChanges = this.savePictChanges.bind(this);
        this.onDropCover = this.onDropCover.bind(this);
        this.state = {
            name: this.props.oneHack.name,
            email: this.props.oneHack.email,
            dateDebut: new Date(this.props.oneHack.dateDebut),
            dateFin: new Date(this.props.oneHack.dateFin),
            emplacement: this.props.oneHack.emplacement,
            description: this.props.oneHack.description,
            cible: this.props.oneHack.cible,
            firstPlace: this.props.oneHack.prizescontent.firstPlace,
            secondPlace: this.props.oneHack.prizescontent.secondPlace,
            thirdPlace: this.props.oneHack.prizescontent.thirdPlace,
            first: this.props.oneHack.winners ? this.props.oneHack.winners.first : "aa",
            second: this.props.oneHack.winners ? this.props.oneHack.winners.second : "aa",
            third: this.props.oneHack.winners ? this.props.oneHack.winners.third : "aa",
            linkFB: this.props.oneHack.linkFB,
            linkIN: this.props.oneHack.linkIN,
            linkTW: this.props.oneHack.linkTW,
            linkLN: this.props.oneHack.linkLN,
            cover: null,
        }
    }

    onDropCover(picture) {
        console.log(picture[0], this.props.oneHack._id);
        
        this.setState({
            cover: picture[0]
        });
    }

   
    handleSubmit(values) {
        const data = {
            name: values.name !== '' ? values.name : this.props.oneHack.name,
            emplacement: values.emplacement !== '' ? values.emplacement : this.props.oneHack.emplacement,
            description: values.description,
            cible: values.cible,
            prizes: !!(values.firstPlace || values.secondPlace || values.thirdPlace),
            prizescontent: {
                firstPlace: values.firstPlace,
                secondPlace: values.secondPlace,
                thirdPlace: values.thirdPlace,
            },
            winners: {
                first: values.first,
                second: values.second,
                third: values.third,
            },

            linkFB: values.linkFB,
            linkIN: values.linkIN,
            linkTW: values.linkTW,
            linkLN: values.linkLN,
            dateDebut: this.state.dateDebut,
            dateFin: this.state.dateFin,
            //image: this.state.cover ? this.state.cover[0].name : null
        };
        this.props.updateHackathon(data, this.props.oneHack._id);
        window.location.reload(false);

    }

    savePictChanges() {
      //  window.location.reload(true);
        console.log(this.state.cover);
        let data = new FormData();
        data.append('file',this.state.cover);
        // console.log(this.state.selectedFile);
       // this.props.updateHackPicture(data, this.props.oneHack._id);
        axios.post(`http://localhost:5000/hackathon/updateCoverPicture/`+this.props.oneHack._id, data)
        .then(res => {
            console.log(data)
           // window.location.reload(true);
          
        })
        //window.location.reload(true);

    }

  

    render() {
        return (
            <>

                {this.props.isUpdated ? (
                    <div className="container vivify pullUp middle-content vertical-center ">
                        <h2 className="text-center small-titles ">Your hackathon is added successfuly, you can check
                            through Hackathons.</h2>
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
                                    <Loader />
                                </div>
                            ) : (
                                    <div className="container middle-content">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-lg-8 col-md-10 col-12 mb-4">
                                                <LocalForm onSubmit={(event, values) => this.handleSubmit(event, values)}>
                                                    <div className=" mt-5 ">
                                                        <Label htmlFor="cover"
                                                            className="brand small-titles vivify flipInX delay-150 mt-2">Cover </Label>
                                                        <div className="line-squared vivify fadeIn delay-200" />

                                                        <ImageUploader
                                                            withPreview={true}
                                                            withIcon={true}
                                                            id="upload-photo"
                                                            label="Add your photos"
                                                            buttonText="Add your photos"
                                                            onChange={this.onDropCover}
                                                            imgExtension={['.jpg', '.png', 'jpeg', 'PNG', 'JPG', 'JPEG']}
                                                            maxFileSize={5242880}
                                                            fileSizeError="Photo size is too big"
                                                            singleImage="true"
                                                            className="col-12 col-lg-6 col-md-8 mx-auto"
                                                        />
                                                    </div>
                                                    <button type="submit" className="button button-reg-log row mx-auto d-flex my-4"
                                                        onClick={this.savePictChanges}>
                                                        Save Pict Changes
                                                   </button>

                                                    <Label htmlFor="name"
                                                        className="brand small-titles vivify flipInX delay-150 mt-2">Name </Label>
                                                    <p className="vivify fadeIn delay-150 text-size font-weight-bold">{this.props.oneHack.name}</p>
                                                    <div className="line-squared vivify fadeIn delay-200" />
                                                    <Control.text model=".name" type="text"
                                                        className="input col-12 vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                                        placeholder="Name"
                                                        defaultValue={this.props.oneHack.name} />

                                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Place </p>
                                                    <p className="vivify fadeIn delay-150 text-size font-weight-bold">{this.props.oneHack.emplacement}</p>
                                                    <div className="line-squared vivify fadeIn delay-200" />
                                                    <Control.text model=".emplacement" type="text"
                                                        className="input col-12 vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                                        placeholder="Place"
                                                        defaultValue={this.props.oneHack.emplacement} />

                                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Date </p>
                                                    <div className="line-squared vivify fadeIn delay-200" />
                                                    <div className="row ">
                                                        <div className="col-12 col-lg-6 mx-auto px-5 ">
                                                            <Label className="label col-12 mt-3">Date from</Label>
                                                            <Datepicker
                                                                dateFormat="yyyy/MM/dd"
                                                                className="input  "
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
                                                            <Label className="label col-12 mt-3">Date to</Label>
                                                            <Datepicker
                                                                dateFormat="yyyy/MM/dd"
                                                                className="input   "
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

                                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Description </p>
                                                    <p className="vivify fadeIn delay-150 text-size font-weight-bold">{this.props.oneHack.description}</p>
                                                    <div className="line-squared vivify fadeIn delay-200" />
                                                    <Control.text model=".description" type="text"
                                                        className="input col-12 vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                                        placeholder="Description"
                                                        defaultValue={this.props.oneHack.description} />

                                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Who can
                                                attend </p>
                                                    <p className="vivify fadeIn delay-150 text-size font-weight-bold">{this.props.oneHack.cible}</p>
                                                    <div className="line-squared vivify fadeIn delay-200" />
                                                    <Control.text model=".cible" type="text"
                                                        className="input col-12 vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                                        placeholder="Who can attend"
                                                        defaultValue={this.props.oneHack.cible} />

                                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Prizes </p>
                                                    <div className="line-squared vivify fadeIn delay-200" />
                                                    <div className="row mx-auto mt-2 col-12 col-md-10 col-lg-8">
                                                        <Label htmlFor="firstPlace"
                                                            className="label col-12 col-lg-6 col-md-6 my-auto red-colored">First
                                                    Place</Label>
                                                        <Control.text model=".firstPlace"
                                                            id="firstPlace"
                                                            name="firstPlace"
                                                            className="form-control input col-12 col-lg-6 col-md-6 "
                                                            placeholder="First Place"
                                                            defaultValue={this.props.oneHack.firstPlace}

                                                        />
                                                    </div>

                                                    <div className="row mx-auto mt-2 col-12 col-md-10 col-lg-8 mt-3">
                                                        <Label htmlFor="secondPlace"
                                                            className="label col-12 col-lg-6 col-md-6 my-auto red-colored">Second
                                                    Place</Label>
                                                        <Control.text model=".secondPlace"
                                                            id="secondPlace"
                                                            name="secondPlace"
                                                            className="form-control input col-12 col-lg-6 col-md-6 "
                                                            placeholder="Second Place"
                                                            defaultValue={this.props.oneHack.secondPlace}
                                                        />
                                                    </div>

                                                    <div className="row mx-auto mt-2 col-12 col-md-10 col-lg-8 mt-3">
                                                        <Label htmlFor="thirdPlace"
                                                            className="label col-12 col-lg-6 col-md-6 my-auto red-colored">Third
                                                    Place</Label>
                                                        <Control.text model=".thirdPlace"
                                                            id="thirdPlace"
                                                            name="thirdPlace"
                                                            className="form-control input col-12 col-lg-6 col-md-6 "
                                                            placeholder="Third Place"
                                                            defaultValue={this.props.oneHack.thirdPlace}

                                                        />
                                                    </div>

                                                    {new Date(this.props.oneHack.dateFin).getTime() <= new Date().getTime() ? (
                                                        <>
                                                            <p className="brand small-titles vivify flipInX delay-150 mt-2">Winners </p>
                                                            <div className="line-squared vivify fadeIn delay-200" />
                                                            <div className="row mx-auto mt-2 col-12 col-md-10 col-lg-8">
                                                                <Label htmlFor="firstPlace"
                                                                    className="label col-12 col-lg-6 col-md-6 my-auto red-colored">First
                                                            winner</Label>
                                                                <Control.text model=".first"
                                                                    id="first"
                                                                    name="first"
                                                                    className="form-control input col-12 col-lg-6 col-md-6 "
                                                                    placeholder="First Winner"
                                                                    defaultValue={this.props.oneHack.winners.first}

                                                                />
                                                            </div>

                                                            <div className="row mx-auto mt-2 col-12 col-md-10 col-lg-8 mt-3">
                                                                <Label htmlFor="secondPlace"
                                                                    className="label col-12 col-lg-6 col-md-6 my-auto red-colored">Second
                                                            Winner</Label>
                                                                <Control.text model=".second"
                                                                    id="second"
                                                                    name="second"
                                                                    className="form-control input col-12 col-lg-6 col-md-6 "
                                                                    placeholder="Second Winner"
                                                                    defaultValue={this.props.oneHack.winners.second}
                                                                />
                                                            </div>

                                                            <div className="row mx-auto mt-2 col-12 col-md-10 col-lg-8 mt-3">
                                                                <Label htmlFor="thirdPlace"
                                                                    className="label col-12 col-lg-6 col-md-6 my-auto red-colored">Third
                                                            Winner</Label>
                                                                <Control.text model=".third"
                                                                    id="third"
                                                                    name="third"
                                                                    className="form-control input col-12 col-lg-6 col-md-6 "
                                                                    placeholder="Third Winner"
                                                                    defaultValue={this.props.oneHack.winners.third}

                                                                />
                                                            </div>

                                                        </>
                                                    ) : null}

                                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Links </p>
                                                    <div className="line-squared vivify fadeIn delay-200" />
                                                    <div className="row mx-auto col-12 mt-5">
                                                        <Label htmlFor="linkFB"
                                                            className=" links-logo fa fa-facebook fa-2x label col-1 my-auto " />
                                                        <Control.text model=".linkFB"
                                                            id="linkFB"
                                                            name="linkFB"
                                                            className="form-control input col-lg-11 col-md-11 col-10   "
                                                            placeholder="Facebook Link"
                                                            defaultValue={this.props.oneHack.linkFB}

                                                        />
                                                    </div>
                                                    <div className="row mx-auto col-12 mt-5">
                                                        <Label htmlFor="linkLN"
                                                            className="links-logo fa fa-linkedin fa-2x label col-1 my-auto " />
                                                        <Control.text model=".linkLN"
                                                            id="linkLN"
                                                            name="linkLN"
                                                            className="form-control input col-lg-11 col-md-11 col-10   "
                                                            placeholder="Linkedin Link"
                                                            defaultValue={this.props.oneHack.linkLN}

                                                        />
                                                    </div>

                                                    <div className="row mx-auto col-12 mt-5">
                                                        <Label htmlFor="linkIN"
                                                            className="links-logo fa fa-instagram fa-2x label col-1 my-auto " />
                                                        <Control.text model=".linkIN"
                                                            id="linkIN"
                                                            name="linkIN"
                                                            className="form-control input col-lg-11 col-md-11 col-10   "
                                                            placeholder="Instagram Link"
                                                            defaultValue={this.props.oneHack.linkIN}

                                                        />
                                                    </div>

                                                    <div className="row mx-auto col-12 mt-5">
                                                        <Label htmlFor="linkTW"
                                                            className="links-logo fa fa-twitter fa-2x label col-1 my-auto " />
                                                        <Control.text model=".linkTW"
                                                            id="linkTW"
                                                            name="linkTW"
                                                            className="form-control input col-lg-11 col-md-11 col-10   "
                                                            placeholder="Twitter Link"
                                                            defaultValue={this.props.oneHack.linkTW}

                                                        />
                                                    </div>


                                                    <button type="submit"
                                                        className="button button-reg-log row mx-auto d-flex mb-3">
                                                        Change
                                            </button>
                                                </LocalForm>

                                            </div>
                                        </div>
                                    </div>
                                )}
                        </>
                    )
                }
            </>
        );
    }
}

export default withRouter(HackathonEdit);
