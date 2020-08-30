import React, {Component} from 'react';
import "./hackathons.sass";
import CardHackathons from "./cardHackathons/CardHackathons";
import AdvancedSearchModal from "./advancedSearchModal/AdvancedSearchModal";

class Hackathons extends Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.toggleAdv = this.toggleAdv.bind(this);
        this.state = {
            renderedHackathons: this.props.hackathons,
            isAdvOpen: false
        }
    }

    toggleAdv() {
        this.setState({
            isAdvOpen: !this.state.isAdvOpen
        });
    }
    filterList(e){
        let updateList = this.props.hackathons;
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
                <input type="text" className="input col-lg-5 col-md-7 col-sm-6 vivify fadeIn mt-3 d-flex mx-auto mb-4" placeholder="Search" onChange={this.filterList} />
                <div className=" text-center col-12 mx-auto mb-5 ">
                    <i className="fa fa-search fa-2x mt-4 mr-4 vivify fadeIn" aria-hidden="true"/>
                    <span className="brand small-titles vivify fadeIn mt-3 mb-5 text-center " onClick={this.state.toggleAdv}>Advanced search</span>
                    <AdvancedSearchModal/>
                </div>

                <div className="row">

                    {this.state.renderedHackathons.map((hackathon) => {
                        return (
                            <CardHackathons
                                oneHack={hackathon}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default Hackathons;
