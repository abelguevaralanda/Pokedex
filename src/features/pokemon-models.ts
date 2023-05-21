export interface PokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Detail {
  detail: PokeDetail[];
}

export interface PokeDetail {
  id: number;
  name: string;
  weight: number;
  height: number;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  sprites: {
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}
