import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container,Row,Button} from 'react-bootstrap'

import PokemonCard from './PokemonCard'
import InfoModal from './InfoModal'

export default function PokemonList(){
    const [apiData,setApiData]=useState({});   
    const [pokemons,setPokemons]=useState([]);
    const [pages,setPages]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [show,setShow]=useState(false);
    const [urlPokemonSelected,setUrlPokemonSelected]=useState();

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
            .then(data=>{
                setApiData(data.data);
                setPokemons(data.data.results);

                let countPages=Math.ceil(data.data.count/20);
                console.log(countPages)
                const arrayPages=[];

                for (let i=1; i<=countPages; i++){
                    arrayPages.push(i);
                }

                setPages(arrayPages)
                setCurrentPage(1);
            })   
    },[])

    const changePage=(e)=>{
        //get url: prev or next
        const param=e.target.value;
        updateCurrentPage(param);
        const url=apiData[param];
        
        axios.get(url)
            .then(data=>{
                setApiData(data.data);
                setPokemons(data.data.results);
            })      
    }

    const updateCurrentPage=(param)=>{
        if(param=="next"){
            if(currentPage<pages.length)
                setCurrentPage(currentPage+1)
        }            
        else{
            if(currentPage>1)
                setCurrentPage(currentPage-1)
        }  
    }

    const handleShow=(url)=>{
        setUrlPokemonSelected(url);
        setShow(true);
    }

    const handleClose=()=>{
        setShow(false)
    }
    
    return(

        <Container>
            <Row class="pokemon-row mt-2 center-row">
                {
                    pokemons.map(p=> <PokemonCard pokemons={pokemons} url={p.url} name={p.name} handleShow={handleShow}/>)
                }
            </Row>
            <div className='mb-2 margin-top'>
                <Button variant='dark' className="margin-right" onClick={changePage} value="previous" >Previous</Button>
                <Button value="next" className="margin-right" onClick={changePage}  variant='dark'>Next</Button>
            </div>
            <div className="margin-top overflow-auto">
                <p class="pagination">P??gina {currentPage} de {pages.length}</p>
            </div>

            <InfoModal show={show} handleClose={handleClose} pokemonSelected={urlPokemonSelected}/>
            
        </Container>

    )
}