import { Character } from "@/types/character";
import Image from "next/image";
import CharacterList from "./_components/character/list";
import { ServerResponse } from "@/types/response";
import Filter from "./_components/character/filter";
import useStore from "@/store/characters";

export default async function Home() {

  const res = await fetch(`https://rickandmortyapi.com/api/character`)
  const response: ServerResponse<Character> = await res.json();

  return (
    <div className="rckmo-wrapper font-[family-name:var(--font-geist-sans)]">
      <Filter />
      <CharacterList characters={response.results} />
    </div>
  );
}


// export async function getServerSideProps() {
//   const res = await fetch(`https://rickandmortyapi.com/api/character`)
//   const characters = await res.json()
 
//   return { props: { characters } }
// }