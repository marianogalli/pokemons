import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect,useState } from 'react';
import {Modal, ModalFooter,Button } from 'react-bootstrap'


export default function InfoModal(props){
    
    const {show,handleClose,type,name,pokemonSelected}=props;
    const [pokemonInfo,setPokemonInfo]=useState({});

    useEffect(()=>{
        axios.get(pokemonSelected)
            .then(data=>{
                setPokemonInfo({
                    name:data.data.name,
                    abilities:data.data.abilities
                })
            })
            
    },[pokemonSelected])

    return(
        <Modal show={show} >
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>{pokemonInfo.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {pokemonInfo.name} has {pokemonInfo.abilities?.length} abilities:
                {pokemonInfo.abilities?.map(a=><p>{a.ability.name}</p>)}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

