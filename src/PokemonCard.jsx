import React, { useEffect,useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap'
import axios from 'axios'
import { Modal } from 'react-bootstrap';

export default function PokemonCard(props) {
    
    const {pokemons,url,name,handleShow}=props;
    const [img,setImg]=useState({});

    useEffect(()=>{
        axios.get(url)
            .then(data=>{
                setImg(data.data.sprites.other.dream_world.front_default);
            })
    },[pokemons])

    return ( 
        <>   
        <Col lg="auto" md="auto" sm="auto" className="d-flex align-items-stretch">                
            <Card
                className="margin-top"
                style={{ width: '18rem' }}>          
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <a className="poke-info"><Card.Img style={{height:'20rem'}} src={img}/></a>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={()=>handleShow(url)}>View Info</Button>
                </Card.Body>
            </Card>                
        </Col> 
        </>    
    )
}