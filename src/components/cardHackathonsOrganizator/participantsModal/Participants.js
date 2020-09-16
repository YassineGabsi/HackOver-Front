import React from 'react';
import "./participants.sass";
import Modal from "reactstrap/es/Modal";
import ModalBody from "reactstrap/es/ModalBody";
import CardHackathons from "../../hackathons/cardHackathons/CardHackathons";
import Loader from "../../loader/Loader";


function Participants(props) {

    return (
        <Modal isOpen={true}
        >
            <div className="align-items-center modal-header">
                <img src={require("../../../img/logo.png")} className="img-fluid " alt=""/>
                <button type="button" className="close close-button float-right" data-dismiss="modal"
                        onClick={() => props.setIsParticipantsModalOpen(false)}>&times;
                </button>
            </div>
            <ModalBody className="align-items-center mx-auto">
                <h2 className="text-center brand mt-4 small-titles"> <span className="small-titles" style={{color: "white"}}>Participants of </span>{props.oneHack.name}</h2>
                <div className="row d-flex justify-content-center">
                    <div className="line-squared my-3"/>
                </div>
                <div className="mx-5">
                    {!props.oneHack.particpants.length ? (
                        <h2 className="small-titles vivify flipInX delay-250 text-center my-4">
                            There is no Participants yet!.
                        </h2>
                    ) : (
                        <>
                            {props.oneHack.particpants.map((participant) => {
                                var bg = `http://localhost:5000/uploads/user_${participant.picture}`;
                                return (
                                    <div className="row mt-3">
                                        <div className="user-circle mr-5" style={{backgroundImage: "url(" + bg + ") "}}/>
                                        <h2 className="small-titles mt-3">{participant.fullName}</h2>
                                        </div>

                                );
                            })
                            }
                        </>
                    )}

                </div>
            </ModalBody>
        </Modal>

    );
}

export default Participants;
