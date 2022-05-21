import { render } from '@testing-library/react';
import React from 'react';
import {Modal, ModalFooter,Button } from 'react-bootstrap'


export default function InfoModal(props){
    
    const {show,handleClose,type,name}=props;

    return(
        <Modal show={show} >
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

