import React from 'react';
import "./winners.sass";
import Modal from "reactstrap/es/Modal";
import ModalBody from "reactstrap/es/ModalBody";

function Winners(props) {
    return (
        <Modal isOpen={true}
               onRequestClose={props.toggleWinnersModal}>
            <div className="align-items-center modal-header">
                <img src={require("../../../img/logo.png")} className="img-fluid " alt=""/>
                <button type="button" className="close close-button float-right" data-dismiss="modal"
                        onClick={props.toggleWinnersModal}>&times;
                </button>
            </div>
            <ModalBody className="align-items-center mx-auto">
                <h2 className="text-center brand mt-4 big-titles">{props.oneHack.name}</h2>
                <div className="row d-flex justify-content-center">
                    <div className="line-squared my-3"/>
                </div>
                <div className="mx-5">
                    {!props.oneHack.winners ? (
                        <h2 className="small-titles vivify flipInX delay-250 text-center my-4">
                            There is no winners yet! Come back soon to see the winners.
                        </h2>
                    ) : (
                        <>
                            <h2 className="mx-auto vivify flipInX delay-250 mt-4 small-titles">
                                <img className="mr-4" src={require("../../../img/first.png")} alt=""/>
                                {props.oneHack.winners.first}
                            </h2>
                            <h2 className="mx-auto vivify flipInX delay-250 mt-4 small-titles ">
                                <img className="mr-4" src={require("../../../img/second.png")} alt=""/>
                                {props.oneHack.winners.second}
                            </h2>
                            <h2 className="mx-auto mb-3 vivify flipInX delay-250 mt-4 small-titles">
                                <img className="mr-4" src={require("../../../img/third.png")} alt=""/>
                                {props.oneHack.winners.third}
                            </h2>
                        </>
                    )}

                </div>
            </ModalBody>
        </Modal>

    );
}

export default Winners;
