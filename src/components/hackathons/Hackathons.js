import React, {Component} from 'react';
import "./hackathons.sass";
import CardHackathons from "./cardHackathons/CardHackathons";
import AdvancedSearchModal from "./advancedSearchModal/AdvancedSearchModal";
import Modal from "reactstrap/es/Modal";
import ModalBody from "reactstrap/es/ModalBody";
import {Control, LocalForm} from "react-redux-form";
import Label from "reactstrap/es/Label";

class Hackathons extends Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.toggleAdv = this.toggleAdv.bind(this);
        this.handleAdvSearch = this.handleAdvSearch.bind(this);
        this.country = React.createRef();
        this.dateFrom = React.createRef();
        this.dateTo = React.createRef();
        this.organizer = React.createRef();

        this.state = {
            renderedHackathons: this.props.hackathons,
            isAdvOpen: false,
        }
    }

    handleAdvSearch() {
        console.log(this.country.current.value);
    }

    toggleAdv() {
        this.setState({
            isAdvOpen: !this.state.isAdvOpen
        });
    }

    filterList(e) {
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
                <input type="text" className="input col-lg-5 col-md-7 col-sm-6 vivify fadeIn mt-3 d-flex mx-auto mb-4"
                       placeholder="Search" onChange={this.filterList}/>
                <div className=" text-center col-12 mx-auto mb-5 ">
                    <i className="fa fa-search fa-2x mt-4 mr-4 vivify fadeIn" aria-hidden="true"/>
                    <a className="brand small-titles vivify fadeIn mt-3 mb-5 text-center adv-search"
                       onClick={this.toggleAdv}>Advanced search</a>
                    {this.state.isAdvOpen ? (
                        <Modal isOpen="active">
                            <div className="align-items-center modal-header">
                                <img src={require("../../img/logo.png")} className="mx-auto col-6 top-logo" alt=""/>
                                <button type="button" className="close close-button float-right" data-dismiss="modal"
                                        onClick={this.toggleAdv}>&times;
                                </button>
                            </div>
                            <ModalBody className="align-items-center ">
                                <div className="text-center col-12 mx-auto ">
                                    <i className="fa fa-search fa-2x  mr-4 vivify fadeIn" aria-hidden="true"/>
                                    <span className="brand small-titles vivify fadeIn  mb-5 text-center ">Advanced search</span>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="line-squared my-3"/>
                                </div>

                                <Label className="label mt-5">Country</Label>
                                <select
                                    className=" form-control select-search"
                                    ref={this.country}
                                >
                                    <option selected>All</option>
                                    <option>Ariana</option>
                                    <option>Beja</option>
                                    <option>Ben Arous</option>
                                    <option>Bizerte</option>
                                    <option>Gabes</option>
                                    <option>Gafsa</option>
                                    <option>Jendouba</option>
                                    <option>Kairouan</option>
                                    <option>Kasserine</option>
                                    <option>Kebilli</option>
                                    <option>Kef</option>
                                    <option>Mahdia</option>
                                    <option>Manouba</option>
                                    <option>Mednine</option>
                                    <option>Monastir</option>
                                    <option>Nabeul</option>
                                    <option>Sfax</option>
                                    <option>Sidi Bouzid</option>
                                    <option>Siliana</option>
                                    <option>Sousse</option>
                                    <option>Tataouine</option>
                                    <option>Tozeur</option>
                                    <option>Zaghouan</option>
                                </select>

                                <div className="row ">
                                    <div className="col-12 col-lg-6 mt-5">
                                        <Label className="label">Date from</Label>
                                        <input type="text"
                                               className=" form-control input-search"
                                               placeholder="From"
                                               ref={this.dateFrom}
                                        />
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5">
                                        <Label className="label">Date to</Label>
                                        <input type="text"
                                               className=" form-control input-search"
                                               placeholder="To"
                                               ref={this.dateTo}
                                        />
                                    </div>
                                </div>

                                <Label className="label mt-5">Organizer</Label>
                                <input type="text"
                                       className=" form-control input-search"
                                       placeholder="Organizer"
                                       ref={this.organizer}
                                />


                                <button type="submit" className="button button-reg-log row mx-auto d-flex my-5"
                                        onClick={this.handleAdvSearch}>
                                    Search
                                </button>
                            </ModalBody>
                        </Modal>

                    ) : null}
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
