import React from 'react';
import "./one-hackathon.sass";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { ExternalLink } from 'react-external-link';



function OnePageHackathon(props) {
    return (
        <div className="container middle-content">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-6 mb-4">
                    <div className="card  box-shadow mb-3 vivify popIn "
                         style={{backgroundImage: `url(${props.oneHack.image})`}}>
                        <div className="card-container">
                            <h5 className="card-date">
                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit",
                                }).format(new Date(props.oneHack.date))}
                            </h5>
                        </div>
                    </div>

                    <h1 className="brand big-titles vivify flipInX delay-150 mt-2">{props.oneHack.name} </h1>
                    <p className=" vivify flipInX delay-150 ">Organizator: <span className="red-colored">{props.oneHack.author}</span></p>
                    <div className="line-squared vivify fadeIn delay-200"/>
                    <div className="row">
                        <i className="fa fa-calendar-o fa-5x ml-5 mr-1 mt-4" aria-hidden="true"/>
                        <h4 className="mt-5 ml-4">{new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                        }).format(new Date(props.oneHack.date))}</h4>
                    </div>
                    <div className="row">
                        <i className="fa fa-map-marker fa-5x ml-5 mr-1 mt-4" aria-hidden="true"/>
                        <h4 className="mt-5 ml-4">
                            {props.oneHack.place}
                        </h4>
                    </div>
                    <button className="button button-reg-log row mx-3">
                        Participate
                    </button>
                </div>
            </div>
            <div className="col-12">
                <p className="brand small-titles vivify flipInX delay-150 mt-2">Event Description </p>
                <div className="line-squared vivify fadeIn delay-200"/>
                <p className="mt-3">{props.oneHack.description}</p>

                <p className="brand small-titles vivify flipInX delay-150 mt-2">Who can attend ?</p>
                <div className="line-squared vivify fadeIn delay-200"/>
                <p className="mt-3">{props.oneHack.attend}</p>

                <p className="brand small-titles vivify flipInX delay-150 mt-2">Prizes</p>
                <div className="line-squared vivify fadeIn delay-200"/>
                {props.oneHack.prizes ? (
                    <div>
                        <p className="mt-3 ">First Place : <span className="red-colored">{props.oneHack.prizescontent.firstplace}</span></p>
                        <p className="mt-3 ">Second Place : <span className="red-colored">{props.oneHack.prizescontent.secondplace}</span></p>
                        <p className="mt-3 ">Third Place : <span className="red-colored">{props.oneHack.prizescontent.thirdplace}</span></p>
                    </div>
                ) : (
                    <p className="mt-3 ">The prizes will be announced as soon as possible</p>
                ) }

                <p className="brand small-titles vivify flipInX delay-150 mt-2">Photos</p>
                <div className="line-squared vivify fadeIn delay-200"/>
                <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled >
                    <img src={require(`../../img/${props.oneHack.photos.ph1}`)} className="sliderimg d-flex " alt=""/>
                    <img src={require(`../../img/${props.oneHack.photos.ph2}`)} className="sliderimg d-flex" alt=""/>
                    <img src={require(`../../img/${props.oneHack.photos.ph3}`)} className="sliderimg d-flex" alt=""/>
                    <img src={require(`../../img/${props.oneHack.photos.ph4}`)} className="sliderimg d-flex" alt=""/>
                </AliceCarousel>

                <p className="brand small-titles vivify flipInX delay-150 mt-2">Links</p>
                <div className="line-squared vivify fadeIn delay-200"/>
                <ExternalLink href={props.oneHack.links.fb} >
                    <a className="fa fa-facebook ml-3 mr-1 fa-2x" aria-hidden="true"/>
                </ExternalLink>
                <ExternalLink href={props.oneHack.links.insta} >
                    <a className="fa fa-instagram ml-3 mr-1 fa-2x" aria-hidden="true"/>
                </ExternalLink>
                <ExternalLink href={props.oneHack.links.linkedin} >
                    <a className="fa fa-linkedin ml-3 mr-1 fa-2x" aria-hidden="true"/>
                </ExternalLink>
                <ExternalLink href={props.oneHack.links.twitter} >
                    <a className="fa fa-twitter ml-3 mr-1 fa-2x" aria-hidden="true"/>
                </ExternalLink>
            </div>
        </div>

    );
}

export default OnePageHackathon;
