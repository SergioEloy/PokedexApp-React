import React from "react";
import { IPokemonData } from "../interfaces";
import useFetchPokemonData from "../logic/useFetchPokemonData";
import "../styles/Pokemon.css";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  const anotherData = useFetchPokemonData(url);

  const pokemonIdx = anotherData.pokemonData?.pokedexNumber;
  const pokemonSprite = anotherData.pokemonData?.sprites;
  const pokemonTypes = anotherData.pokemonData?.pokemonType.map((e) => (
    <div className={"pkm-type " + e}>
      <p className="type">{e[0].toUpperCase() + e.slice(1)}</p>
    </div>
  ));
  const pokemonHeight = anotherData.pokemonData?.height;
  const pokemonWeight = anotherData.pokemonData?.weight;
  const pokemonGeneration = anotherData.pokemonData?.generation;
  const wikiEntrie = `https://pokemon.fandom.com/wiki/${name}`;

  console.log(anotherData);

  return (
    <div className="pokemonContainer">
      <div className="pkm-number">
        <span className="pkm-id">
          {pokemonIdx?.toString().padStart(4, "0")}
        </span>
      </div>
      <div className="pkm-sprite">
        <img src={pokemonSprite} alt={name} className="pkm-img" />
      </div>
      <div className="pkm-name">
        <a href={wikiEntrie} target="_blank" className="name">
          {name[0].toUpperCase() + name.slice(1)}
        </a>
      </div>
      <div className="pkm-types">{pokemonTypes}</div>
      <div className="stats">
        <p className="height">{"Height: " + pokemonHeight + " cm"}</p>
        <p className="weight">{"Weight: " + pokemonWeight + " kg"}</p>
      </div>
      <p className="generation">{pokemonGeneration}</p>
    </div>
  );
};

export default Pokemon;
