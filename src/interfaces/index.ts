import { type } from "os";

export interface IInfoPokemon {
  name: string;
  url: string;
}

export interface IListResults<T> {
  count: number;
  next: string;
  previous: null;
  results: T[];
}

export interface IPokemonData {
  sprites: string;
  pokedexNumber: number;
  pokemonType: string[];
  height: string;
  weight: string;
  generation: string;
}

export interface IPokemonTypes {
  slot: number;
  type: IInfoPokemon;
}

export interface IPokemonSprites {
  other: {
    home: {
      front_default: string;
    };
  };
}

export interface IPokemonTypesFetch {
  id: number;
  name: string;
}

export interface ITypesDetails {
  pokemon: {
    pokemon: IInfoPokemon;
    slot: number;
  }[];
}
