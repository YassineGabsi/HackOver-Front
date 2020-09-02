import React, {Component} from 'react';
import "./one-hackathon.sass";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { ExternalLink } from 'react-external-link';
import Winners from "./winnersModal/Winners";
import Feedbacks from "./feedbacks/Feedbacks";


class OnePageHackathon extends Component {
    constructor(props) {
        super(props);
        this.toggleWinnersModal = this.toggleWinnersModal.bind(this);
        this.bg = require(`../../img/${this.props.oneHack.image}`);
        this.state = {
            isWinnersModalOpen: false,
            feedbacks: this.props.feedbacks
        }
    }

    componentDidMount() {
        let specificFeeds = this.props.feedbacks;
        specificFeeds = specificFeeds.filter(item =>
            item.hackId === this.props.oneHack.id
        );
        this.setState({
            feedbacks: specificFeeds
        });
    }

    toggleWinnersModal() {
        this.setState({
            isWinnersModalOpen: !this.state.isWinnersModalOpen
        });
    }
    render() {
        return (
            <div className="container middle-content">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="card  box-shadow mb-3 vivify popIn "
                             style={{backgroundImage: "url("+this.bg+") "}}
                        >
                            <div className="card-container">
                                <h5 className="card-date">
                                    {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit",
                                    }).format(new Date(this.props.oneHack.date))}
                                </h5>
                            </div>
                        </div>

                        <h1 className="brand big-titles vivify flipInX delay-150 mt-2">{this.props.oneHack.name} </h1>
                        <p className=" vivify flipInX delay-150 ">Organizator: <span
                            className="red-colored">{this.props.oneHack.author}</span></p>
                        <div className="line-squared vivify fadeIn delay-200"/>
                        <div className="row vivify fadeIn delay-200">
                            <i className="fa fa-calendar-o fa-5x ml-5 mr-1 mt-4" aria-hidden="true"/>
                            <h4 className="mt-5 ml-4">{new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit",
                            }).format(new Date(this.props.oneHack.date))}</h4>
                        </div>
                        <div className="row vivify fadeIn delay-200">
                            <i className="fa fa-map-marker fa-5x ml-5 mr-1 mt-4" aria-hidden="true"/>
                            <h4 className="mt-5 ml-4">
                                {this.props.oneHack.place}
                            </h4>
                        </div>

                        {new Date(this.props.oneHack.date).getTime() <= new Date().getTime() ? (
                            <>
                                <button className="button button-reg-log row mx-3 vivify fadeIn delay-200" onClick={this.toggleWinnersModal}>
                                    Winners
                                </button>
                                { this.state.isWinnersModalOpen ? (
                                    <Winners
                                        toggleWinnersModal = {this.toggleWinnersModal}
                                        oneHack = {this.props.oneHack}
                                    />
                                ) : null }
                                <h3 className="mt-4 font-weight-bold vivify fadeIn delay-200">This hackathon is over,
                                    You can Participate in other
                                    <a href="/hackathons" className="red-colored"> hackathons</a>
                                </h3>
                            </>
                        ) : (
                            <>
                                {this.props.auth.isAuthenticated ? (
                                    <button className="button button-reg-log row mx-3 vivify fadeIn delay-200">
                                        Participate
                                    </button>
                                ) : (
                                    <h3 className="mt-4 font-weight-bold vivify fadeIn delay-200">
                                        You should
                                        <a className="red-colored" onClick={this.props.loginModalOpen}> Login </a>
                                        to participate
                                    </h3>
                                )}
                            </>

                        )}


                    </div>
                </div>
                <div className="col-12">
                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Event Description </p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <p className="mt-3">{this.props.oneHack.description}</p>

                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Who can attend ?</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <p className="mt-3">{this.props.oneHack.attend}</p>

                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Prizes</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    {this.props.oneHack.prizes ? (
                        <div>
                            <p className="mt-3 ">First Place : <span
                                className="red-colored">{this.props.oneHack.prizescontent.firstplace}</span></p>
                            <p className="mt-3 ">Second Place : <span
                                className="red-colored">{this.props.oneHack.prizescontent.secondplace}</span></p>
                            <p className="mt-3 ">Third Place : <span
                                className="red-colored">{this.props.oneHack.prizescontent.thirdplace}</span></p>
                        </div>
                    ) : (
                        <p className="mt-3 ">The prizes will be announced as soon as possible</p>
                    )}

                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Photos</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled className="img-fluid">
                        <img src={require(`../../img/${this.props.oneHack.photos.ph1}`)} className="sliderimg d-flex "
                             alt=""/>
                        <img src={require(`../../img/${this.props.oneHack.photos.ph2}`)} className="sliderimg d-flex"
                             alt=""/>
                        <img src={require(`../../img/${this.props.oneHack.photos.ph3}`)} className="sliderimg d-flex"
                             alt=""/>
                        <img src={require(`../../img/${this.props.oneHack.photos.ph4}`)} className="sliderimg d-flex"
                             alt=""/>
                    </AliceCarousel>

                    <p className="brand small-titles vivify flipInX delay-150 mt-2">Links</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <ExternalLink href={this.props.oneHack.links.fb}>
                        <a className="fa fa-facebook ml-3 mr-1 fa-2x" aria-hidden="true"/>
                    </ExternalLink>
                    <ExternalLink href={this.props.oneHack.links.insta}>
                        <a className="fa fa-instagram ml-3 mr-1 fa-2x" aria-hidden="true"/>
                    </ExternalLink>
                    <ExternalLink href={this.props.oneHack.links.linkedin}>
                        <a className="fa fa-linkedin ml-3 mr-1 fa-2x" aria-hidden="true"/>
                    </ExternalLink>
                    <ExternalLink href={this.props.oneHack.links.twitter}>
                        <a className="fa fa-twitter ml-3 mr-1 fa-2x" aria-hidden="true"/>
                    </ExternalLink>

                    <p className="brand small-titles vivify flipInX delay-150 mt-3">Feedbacks</p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    {this.state.feedbacks.map((feedback) => {
                        return(
                            <Feedbacks
                                feedback={feedback}
                            />
                        )
                    })}

                </div>
            </div>

        );
    }
}

export default OnePageHackathon;
