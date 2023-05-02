import { useEffect, useState } from "react";
import {
  IInfoPokemon,
  IPokemonData,
  IPokemonSprites,
  IPokemonTypes,
} from "../interfaces";
import { JsxAttribute } from "typescript";

const useFetchPokemonData = (url: string) => {
  const [pokemonData, setPokemonData] = useState<IPokemonData>();

  const fetchPokenData = async () => {
    const req = await fetch(url);
    const {
      id,
      sprites,
      types,
      height,
      weight,
      generation,
    }: {
      id: number;
      sprites: IPokemonSprites;
      types: IPokemonTypes[];
      height: string;
      weight: string;
      generation: string;
    } = await req.json();

    const {
      other: {
        home: { front_default },
      },
    } = sprites;

    const pkmTypes: string[] = types.map(({ type }) => type.name);

    let generationNumber = "";

    function getGeneration() {
      if (id >= 1 && id <= 151) {
        generationNumber = "Generation I";
      } else if (id >= 152 && id <= 251) {
        generationNumber = "Generation II";
      } else if (id >= 252 && id <= 386) {
        generationNumber = "Generation III";
      } else if (id >= 387 && id <= 493) {
        generationNumber = "Generation IV";
      } else if (id >= 494 && id <= 649) {
        generationNumber = "Generation V";
      } else if (id >= 650 && id <= 721) {
        generationNumber = "Generation VI";
      } else if (id >= 722 && id <= 809) {
        generationNumber = "Generation VII";
      } else if (id >= 810 && id <= 898) {
        generationNumber = "Generation VIII";
      } else if (id > 898) {
        generationNumber = "Generation IX";
      } else {
        generationNumber = "";
      }
    }

    getGeneration();

    const allData = {
      sprites: front_default,
      pokedexNumber: id,
      pokemonType: pkmTypes,
      height: height,
      weight: weight,
      generation: generationNumber,
    };

    return setPokemonData(allData);
  };

  useEffect(() => {
    fetchPokenData().catch(console.error);
  }, [url]);

  return { pokemonData, fetchPokenData };
};

export default useFetchPokemonData;
