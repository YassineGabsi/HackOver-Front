import React, {Component} from 'react';
import "./card-part.sass";
import CardHackathons from "../hackathons/cardHackathons/CardHackathons";
import Loader from "../loader/Loader";

class CardHackPart extends Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.setHackathons = this.setHackathons.bind(this);
        this.state = {
            participatedIn:  this.props.participation.hackathons,
        }
    }
    componentDidMount() {
        if(!this.props.participation.isLoaded && !this.props.participation.isLoading) {
            this.props.getParticipations();
        }
    }
    setHackathons() {
        this.setState({
            participatedIn:  this.props.participation.hackathons,
        })
    }
    filterList(e) {
        let updateList = this.props.participation.hackathons;
        updateList = updateList.filter(item => {
            return item.name.toLowerCase().search(
                e.target.value.toLowerCase()
            ) !== -1;
        });
        this.setState({
            participatedIn: updateList
        });
    }

    render() {
        return (
            <div className="container">
                <h3 className=" text-center small-titles col-12  vivify flipInX delay-150 ">Hackathons that you participated / participating in</h3>

                <input type="text" className="input col-lg-5 col-md-7 col-sm-6 vivify fadeIn mt-3 d-flex mx-auto mb-4"
                       placeholder="Search" onChange={this.filterList}/>
                {!this.state.participatedIn.length ? (
                    <div
                        className="row d-flex justify-content-center text-center vertical-center vivify popIn delay-250">
                        <div className="small-titles  font-weight-bold col-12 ">Sorry, We couldn't find any
                            hackathons with these specifications, you can choose other <span
                                className="red-colored small-titles font-weight-bold"> Hackathons</span></div>
                        <button className="button row mx-5 "
                                data-toggle="modal"
                                onClick={this.setHackathons}>
                            Back
                        </button>
                    </div>

                ) : null}
                <div className="row my-5">
                    {!this.props.isLoading ? (this.state.participatedIn.map((hackathon) => {
                        return (
                            <>
                                <CardHackathons
                                    oneHack={hackathon}
                                    organized={false}
                                />
                            </>

                        );
                    })) : (
                        <div className="my-5 vertical-center">
                            <Loader/>
                        </div>
                    )
                    }
                </div>
            </div>
        );
    }

}

export default CardHackPart;
