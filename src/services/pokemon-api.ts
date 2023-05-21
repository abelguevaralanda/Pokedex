import useSWR from 'swr';
import { PokemonResponse, PokeDetail } from '../features/pokemon-models';

export const fetcher = (url: string) => fetch(url).then(res => res.json());
const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const useGetPokemons = (offset?: number) => {
  const { data } = useSWR<PokemonResponse>(
    `${API_URL}?offset=${offset}&limit=20`,
    fetcher,
  );
  return {
    data,
  };
};

export const useGetByIDPokemon = (id?: string) => {
  const { data } = useSWR<PokeDetail>(`${API_URL}/${id}`, fetcher);

  return { data };
};
