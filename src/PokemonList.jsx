import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Col,Container,Row,Button} from 'react-bootstrap'
import PokemonCard from './PokemonCard'

export default function PokemonList(){

    const [apiData,setApiData]=useState({});   
    const [pokemons,setPokemons]=useState([]) 

    useEffect(()=>{

        axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
            .then(data=>{
                setApiData(data.data);
                setPokemons(data.data.results);
            })   
    },[])

    const updatePokemons=(e)=>{
        
        //get url: prev or next
        const param=e.target.value;
        
        const url=apiData[param];
        
        axios.get(url)
            .then(data=>{
                setApiData(data.data);
                setPokemons(data.data.results);
            })      
    }


    return(
        <>
            <Container>
                <Row>
                    {
                        pokemons.map(p=> <PokemonCard pokemons={pokemons} url={p.url} name={p.name}/>)
                    }
                </Row>
                <div className='mb-2'>
                    <Button variant='dark' onClick={updatePokemons} value="previous" >Previous</Button>
                    <Button value="next" onClick={updatePokemons}  variant='dark'>Next</Button>
                </div>
            </Container>
        </>
    )
}