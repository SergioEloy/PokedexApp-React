import { useEffect, useState } from "react";
import { IInfoPokemon, IListResults, IPokemonTypesFetch } from "../interfaces";

const useFetchTypes = () => {
  const [types, setTypes] = useState<IInfoPokemon[]>([]);
  const fetchTypes = async () => {
    const req = await fetch("https://pokeapi.co/api/v2/type");
    const data: IListResults<IInfoPokemon> = await req.json();
    setTypes(data.results);
  };

  useEffect(() => {
    fetchTypes().catch(console.error);
  }, []);

  return { types };
};

export default useFetchTypes;
