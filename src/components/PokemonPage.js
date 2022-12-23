import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";



function PokemonPage() {
const [pokemons,setPokemons] = useState([])
const [search, setSearch] = useState("")
  useEffect(() => {
    const request = async()=>{
      let req = await fetch("http://localhost:3000/pokemon")
      let res = await req.json()
      console.log(res)
      setPokemons(res)

    }
    request()
  },[])
  
    const filterPokemon = (pokemons) => {
      setPokemons(pokemons.filter((id) => {return id !== id}))
        setPokemons([...filteredPokemon, pokemons])
    }

    
    const handlePost = () => {
      fetch("http://localhost:3000/pokemon", {method:"POST",
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify})

      .then((response) => response.json())
      .then (data = response.json())
      setPokemons(data)


    }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handlePost = {handlePost}/>
      <br />
      <Search search = {search} setSearch = {setSearch}/>
      <br />
      <PokemonCollection pokemons={pokemons} filterPokemon = {filterPokemon} />
    </Container>
  );
}

export default PokemonPage;
