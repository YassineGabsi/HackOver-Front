import React, {Component} from 'react';
import "./card-org.sass";
import Card from "reactstrap/es/Card";
import CardHackathons from "../hackathons/cardHackathons/CardHackathons";
import Loader from "../loader/Loader";

class CardHackOrg extends Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.state = {
            renderedHackathons: this.props.hackathons.filter(item => {
                return item.author.toLowerCase() ===
                    this.props.user.fullName.toLowerCase();
            }),
            isAdvOpen: false,
            dateFrom: new Date(),
            dateTo: new Date(),
        }
    }

    filterList(e) {
        let updateList = this.props.hackathons.filter(item => {
            return item.author.toLowerCase() ===
                this.props.user.fullName.toLowerCase();
        });
        updateList = updateList.filter(item => {
            return item.name.toLowerCase().search(
                e.target.value.toLowerCase()
            ) !== -1;
        });
        this.setState({
            renderedHackathons: updateList
        });
    }

    render() {
        return (
            <div className="container">
                <input type="text" className="input col-lg-5 col-md-7 col-sm-6 vivify fadeIn mt-3 d-flex mx-auto mb-4"
                       placeholder="Search" onChange={this.filterList}/>
                <div className="row my-5">
                    {!this.props.isLoading ? (this.state.renderedHackathons.map((hackathon) => {
                        return (
                            <CardHackathons
                                oneHack={hackathon}
                                organized={true}
                            />
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

export default CardHackOrg;
