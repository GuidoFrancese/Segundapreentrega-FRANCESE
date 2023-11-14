import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { Button } from "../Button/Button";


export const CharacterListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setpage] = useState(1);
  const getCharacters = async () => {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await resp.json();
    setCharacters(data.results);
    console.log(data.results);
  }
   
  const handleNextPage = () => {
    setpage(page+1);
  }

  const handlePrevPage = () => {
    setpage(page-1);
  }


  useEffect((first) => { 
    getCharacters()
   }, [page])
  
  return (
    <>
    <CharacterList characters={characters}/>
    <Button text="Atras" functionClick={handlePrevPage}/>
    <strong>Pagina {page}</strong>
    <Button text="Siguiente" functionClick={handleNextPage}/>
    </>
  )
}
