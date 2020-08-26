import React, {Component} from 'react';
import "./hackathons.sass";
import CardHackathons from "./cardHackathons/CardHackathons";

class Hackathons extends Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.state = {
            renderedHackathons: this.props.hackathons
        }
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
                <input type="text" className="input col-lg-5 col-md-7 col-sm-6  d-flex mx-auto mb-5" placeholder="Search" onChange={this.filterList} />

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
