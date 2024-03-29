import React, {Component} from 'react';
import "./one-hackathon.sass";
import "react-alice-carousel/lib/alice-carousel.css";
import {ExternalLink} from 'react-external-link';
import Winners from "./winnersModal/Winners";
import Feedbacks from "./feedbacks/Feedbacks";
import HackathonEdit from "../hackathonEdit/HackathonEdit";
import { withRouter } from "react-router-dom";
import Loader from "../loader/Loader";


class OnePageHackathon extends Component {
    constructor(props) {
        super(props);
        this.toggleWinnersModal = this.toggleWinnersModal.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.removeHack = this.removeHack.bind(this);
        this.catchFeedback = this.catchFeedback.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.participateInHackathon = this.participateInHackathon.bind(this);
        this.disparticipateInHackathon = this.disparticipateInHackathon.bind(this);
        // this.bg = require(`../../img/${this.props.oneHack.image}`);
        this.bg= `http://localhost:5000/uploads/user_${this.props.oneHack.picture}`;

        this.state = {
            isWinnersModalOpen: false,
            feedbacks: null,
            edit: this.props.location.state.edit,
            participatedIn: false,
            feedback: null,
        }
    }

    componentDidMount() {
        console.log('------------',this.props.oneHack);
        if (!this.props.participation.isLoaded && !this.props.participation.isLoading) {
            this.props.getParticipations();
        }
        let hacks = this.props.participation.hackathons;
        hacks = hacks.filter(item => {
            return item._id === this.props.oneHack._id
        });
        this.setState({
            participatedIn: !!hacks.length
        });

        if (!this.props.feedbacks.isLoaded && !this.props.feedbacks.isLoading) {
            this.props.getFeedbacks(this.props.oneHack._id);
        }
        if (this.props.feedbacks.isLoaded && !this.props.feedbacks.isLoading)
            this.setState({
                feedbacks: this.props.feedbacks.feedbacks
            });


    }

    catchFeedback(e) {
        this.setState({
            feedback: e.target.value
        });
        console.log(this.state.feedback);
    }

    sendFeedback() {
        this.props.addFeedback(this.state.feedback, this.props.oneHack._id);
    }

    participateInHackathon() {
        this.props.participateHackathon(this.props.oneHack._id);

    }

    disparticipateInHackathon() {
        this.props.disparticipateHackathon(this.props.oneHack._id);

    }

    toggleEdit() {
        this.setState({
            edit: !this.state.edit
        });
    }

    removeHack() {
        this.props.removeHackathon(this.props.oneHack, this.props.oneHack._id);
        this.props.history.push("/hackathons-organized");
    }

    toggleWinnersModal() {
        this.setState({
            isWinnersModalOpen: !this.state.isWinnersModalOpen
        });
    }

    render() {
        return (
            <>
                {this.state.edit ? (
                    <HackathonEdit
                        oneHack={this.props.oneHack}
                        auth={this.props.auth}
                        updateHackathon={this.props.updateHackathon}
                    />
                ) : (
                    <>
                        {this.props.participation.isLoading ? (
                            <div className="my-5 vertical-center">
                                <Loader/>
                            </div>
                        ) : (
                            <div className="container middle-content">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <div className="card  box-shadow mb-3 vivify popIn "
                                             style={{backgroundImage: "url(" + this.bg + ") "}}
                                        >
                                            <div className="card-container">
                                                <h5 className="card-date">
                                                    {new Intl.DateTimeFormat("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "2-digit",
                                                    }).format(new Date(this.props.oneHack.dateDebut))}
                                                </h5>
                                            </div>
                                        </div>

                                        <h1 className="brand big-titles vivify flipInX delay-150 mt-2">{this.props.oneHack.name} </h1>
                                        <p className=" vivify flipInX delay-150 small-titles">Organizator: <span
                                            className="red-colored font-weight-bold small-titles ">{this.props.oneHack.author}</span>
                                        </p>
                                        <div className="line-squared vivify fadeIn delay-200"/>
                                        <div className="row vivify fadeIn delay-200">
                                            <i className="fa fa-calendar-o fa-5x ml-5 mr-1 mt-4" aria-hidden="true"/>
                                            <div>
                                                <h4 className="ml-4 text-size" style={{marginTop: "20px"}}>
                                                    <span className="red-colored font-weight-bold">From: </span>
                                                    {new Intl.DateTimeFormat("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "2-digit",
                                                    }).format(new Date(this.props.oneHack.dateDebut))}
                                                </h4>
                                                <h4 className=" ml-4 text-size">
                                                    <span className="red-colored font-weight-bold">To: </span>
                                                    {new Intl.DateTimeFormat("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "2-digit",
                                                    }).format(new Date(this.props.oneHack.dateFin))}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row vivify fadeIn delay-200">
                                            <i className="fa fa-map-marker fa-5x ml-5 mr-1 mt-4" aria-hidden="true"/>
                                            <h4 className="mt-5 ml-4 text-size font-weight-bold">
                                                {this.props.oneHack.emplacement}
                                            </h4>
                                        </div>

                                        {new Date(this.props.oneHack.dateFin).getTime() <= new Date().getTime() ? (
                                            <>
                                                {this.props.auth.isAuthenticated &&
                                                this.props.auth.user.role === "Organizator" && this.props.oneHack.author === this.props.auth.user.fullName ?
                                                    (
                                                        <div className="row">
                                                            <button
                                                                className="button button-reg-log row mx-3 vivify fadeIn delay-200"
                                                                onClick={this.toggleEdit}>
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="button button-reg-log row mx-3 vivify fadeIn delay-200"
                                                                onClick={this.removeHack}>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <button
                                                            className="button button-reg-log row mx-3 vivify fadeIn delay-200"
                                                            onClick={this.toggleWinnersModal}>
                                                            Winners
                                                        </button>
                                                    )}
                                                {this.state.isWinnersModalOpen ? (
                                                    <Winners
                                                        toggleWinnersModal={this.toggleWinnersModal}
                                                        oneHack={this.props.oneHack}
                                                    />
                                                ) : null}
                                                <h3 className="mt-4 font-weight-bold vivify fadeIn delay-200">This
                                                    hackathon is
                                                    over,
                                                    You can Participate in other
                                                    <a href="/hackathons" className="red-colored"> hackathons</a>
                                                </h3>
                                            </>
                                        ) : (
                                            <>
                                                {this.props.auth.isAuthenticated ? (
                                                    <>
                                                        {
                                                            this.props.auth.user.role === "Participant" ? (
                                                                <>
                                                                    {this.state.participatedIn ? (
                                                                        <>
                                                                            <h3 className="mt-4 font-weight-bold vivify fadeIn delay-200">
                                                                                You are already participating in this
                                                                                hackathon
                                                                            </h3>
                                                                            <button
                                                                                className="button button-reg-log row mx-3 vivify fadeIn delay-200"
                                                                                onClick={this.disparticipateInHackathon}
                                                                            >
                                                                                Stop participation
                                                                            </button>
                                                                        </>

                                                                    ) : (
                                                                        <button
                                                                            className="button button-reg-log row mx-3 vivify fadeIn delay-200"
                                                                            onClick={this.participateInHackathon}
                                                                        >
                                                                            Participate
                                                                        </button>
                                                                    )}
                                                                </>

                                                            ) : (
                                                                <> {this.props.oneHack.author === this.props.auth.user.fullName ? (
                                                                    <div className="row">
                                                                        <button
                                                                            className="button button-reg-log row mx-3 vivify fadeIn delay-200"
                                                                            onClick={this.toggleEdit}>
                                                                            Edit
                                                                        </button>
                                                                        <button
                                                                            className="button button-reg-log row mx-3 vivify fadeIn delay-200"
                                                                            onClick={this.removeHack}>
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                ) : (
                                                                    <h3 className="mt-4 font-weight-bold vivify fadeIn delay-200">
                                                                        You can't participate because you are an
                                                                        organizator
                                                                    </h3>
                                                                )}
                                                                </>
                                                            )
                                                        }
                                                    </>
                                                ) : (
                                                    <h3 className="mt-4 font-weight-bold vivify fadeIn delay-200">
                                                        You should
                                                        <a className="red-colored"
                                                           onClick={this.props.loginModalOpen}> Login </a>
                                                        to participate
                                                    </h3>
                                                )}
                                            </>

                                        )}


                                    </div>
                                </div>
                                <div className="col-12">
                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Event
                                        Description </p>
                                    <div className="line-squared vivify fadeIn delay-200"/>
                                    <p className="mt-3">{this.props.oneHack.description}</p>

                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Who can attend ?</p>
                                    <div className="line-squared vivify fadeIn delay-200"/>
                                    <p className="mt-3">{this.props.oneHack.cible}</p>

                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Prizes</p>
                                    <div className="line-squared vivify fadeIn delay-200"/>
                                    {this.props.oneHack.prizes ? (
                                        <div>
                                            <p className="mt-3 ">First Place : <span
                                                className="red-colored">{this.props.oneHack.prizescontent.firstPlace}</span>
                                            </p>
                                            <p className="mt-3 ">Second Place : <span
                                                className="red-colored">{this.props.oneHack.prizescontent.secondPlace}</span>
                                            </p>
                                            <p className="mt-3 ">Third Place : <span
                                                className="red-colored">{this.props.oneHack.prizescontent.thirdPlace}</span>
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="mt-3 ">The prizes will be announced as soon as possible</p>
                                    )}

                                    {/*<p className="brand small-titles vivify flipInX delay-150 mt-2">Photos</p>*/}
                                    {/*<div className="line-squared vivify fadeIn delay-200"/>*/}
                                    {/*<AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled className="img-fluid">*/}
                                    {/*    <img src={require(`../../img/${this.props.oneHack.photos.ph1}`)} className="sliderimg d-flex "*/}
                                    {/*         alt=""/>*/}
                                    {/*    <img src={require(`../../img/${this.props.oneHack.photos.ph2}`)} className="sliderimg d-flex"*/}
                                    {/*         alt=""/>*/}
                                    {/*    <img src={require(`../../img/${this.props.oneHack.photos.ph3}`)} className="sliderimg d-flex"*/}
                                    {/*         alt=""/>*/}
                                    {/*    <img src={require(`../../img/${this.props.oneHack.photos.ph4}`)} className="sliderimg d-flex"*/}
                                    {/*         alt=""/>*/}
                                    {/*</AliceCarousel>*/}

                                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Links</p>
                                    <div className="line-squared vivify fadeIn delay-200"/>
                                    <ExternalLink href={this.props.oneHack.linkFB}>
                                        <i className="fa fa-facebook ml-3 mr-1 fa-2x mt-3" aria-hidden="true"/>
                                    </ExternalLink>
                                    <ExternalLink href={this.props.oneHack.linkIN}>
                                        <i className="fa fa-instagram ml-3 mr-1 fa-2x mt-3" aria-hidden="true"/>
                                    </ExternalLink>
                                    <ExternalLink href={this.props.oneHack.linkLN}>
                                        <i className="fa fa-linkedin ml-3 mr-1 fa-2x mt-3" aria-hidden="true"/>
                                    </ExternalLink>
                                    <ExternalLink href={this.props.oneHack.linkTW}>
                                        <i className="fa fa-twitter ml-3 mr-1 fa-2x mt-3" aria-hidden="true"/>
                                    </ExternalLink>
                                    {new Date(this.props.oneHack.dateFin).getTime() <= new Date().getTime() ? (
                                        <>
                                            <p className="brand small-titles vivify flipInX delay-150 mt-3">Feedbacks</p>
                                            <div className="line-squared vivify fadeIn delay-200"/>
                                            {this.props.feedbacks.isLoading && !this.props.feedbacks.loaded ? (
                                                <div className="my-5 vertical-center">
                                                    <Loader/>
                                                </div>
                                            ) : (
                                                <>
                                                    {this.state.feedbacks? this.state.feedbacks.map((feedback) => {
                                                        return (

                                                            <Feedbacks
                                                                feedback={feedback}
                                                                user={this.props.auth.user}
                                                                deleteFeedback={this.props.deleteFeedback}
                                                                updateFeedback={this.props.updateFeedback}
                                                                oneHack={this.props.oneHack}
                                                            />
                                                        )
                                                    }) : (
                                                        <span className="text-size mt-5 font-weight-bold vivify fadeIn delay-200">
                                                           There is no feedbacks yet, Be the first one to comment.
                                                        </span>
                                                    )}
                                                    {this.props.feedbacks.feedbacks.length === 0 ? (
                                                        <span className="text-size mt-5 font-weight-bold vivify fadeIn delay-200">
                                                           There is no feedbacks yet, Be the first one to comment.
                                                        </span>
                                                    ) : null }
                                                    <p className="brand small-titles vivify flipInX delay-150 mt-3">Add
                                                        a feedback</p>
                                                    <div className="line-squared vivify fadeIn delay-200"/>
                                                    <input type="text"
                                                           className="input col-lg-7 col-12 vivify fadeIn mt-3   mb-4"
                                                           placeholder="Add Feedback" onChange={this.catchFeedback}/>
                                                    <button
                                                        className="button button-reg-log row mx-3 vivify fadeIn delay-200"
                                                        onClick={this.sendFeedback}>
                                                        Add Feedback
                                                    </button>
                                                </>
                                            )}
                                        </>
                                    ) : null}

                                </div>
                            </div>
                        )}
                    </>
                )}
            </>
        );
    }
}

export default withRouter(OnePageHackathon);
