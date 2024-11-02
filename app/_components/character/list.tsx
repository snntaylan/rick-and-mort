"use client"
import { Character } from "@/types/character";
import CharacterItem from "./single-item";
import useStore from "@/store/characters";
import { useEffect } from "react";

type CharacterListProps = {
  characters: Character[]
}

export default function CharacterList({ characters }: CharacterListProps) {

  const store = useStore();

  useEffect(() => {
    if (characters.length) {
      store.setCharacters(characters);
    }
  }, [characters])
  
  
  return (
    <div className="rckmo-characters">

      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {store.characters && store.characters.map((character, index) => (
            <CharacterItem key={index} character={character} />
          ))}
        </div>
      </div>


    </div>
  );
}