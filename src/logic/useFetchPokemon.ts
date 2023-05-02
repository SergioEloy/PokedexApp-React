import { useEffect, useState } from "react";
import { IInfoPokemon, IListResults } from "../interfaces/index";

const URL = "https://pokeapi.co/api/v2/pokemon";

const useFetchPokemon = (currentPage: number) => {
  const [pokemon, setPokemon] = useState<IInfoPokemon[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchPokemonByPage = async (page: number) => {
    const offset = (page - 1) * 9;
    const req = await fetch(`${URL}?limit=9&offset=${offset}`);
    const data: IListResults<IInfoPokemon> = await req.json();

    setPokemon(data.results);
    setTotalPages(Math.ceil(data.count / 9));
  };

  useEffect(() => {
    fetchPokemonByPage(currentPage).catch(console.error);
  }, [currentPage]);

  return { pokemon, totalPages, fetchPokemonByPage };
};

export default useFetchPokemon;
