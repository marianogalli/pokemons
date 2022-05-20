import React, { useEffect,useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap'
import axios from 'axios'

export default function PokemonCard(props) {
    
    const {pokemons,url,name}=props;
    const [img,setImg]=useState({});

    useEffect(()=>{
        axios.get(url)
            .then(data=>{
                setImg(data.data.sprites.other.dream_world.front_default);
            })
    },[pokemons])

    return (        
        <Col lg="auto" md="auto" sm="auto" className="d-flex align-items-stretch">
            <Card
                className="margin-top"
                style={{ width: '18rem' }}>          
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Img style={{height:'20rem'}} src={img}/>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>        
    )
}