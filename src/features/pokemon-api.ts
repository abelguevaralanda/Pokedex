import useSWR from 'swr';
import { PokemonResponse } from './pokemon-models';

export const fetcher = (url: string) => fetch(url).then(res => res.json());
const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const useGetPokemons = (offset: number) => {
  const { data, error, isLoading } = useSWR<PokemonResponse>(
    `${API_URL}?offset=${offset}&limit=20`,
    fetcher,
  );
  return {
    data,
    isLoading,
    isError: error,
  };
};
