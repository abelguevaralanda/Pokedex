import { rest } from 'msw';

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 1281,
        next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
        previous: null,
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
          {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
          },
          {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon/3/',
          },
          {
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/',
          },
          {
            name: 'charmeleon',
            url: 'https://pokeapi.co/api/v2/pokemon/5/',
          },
        ],
      }),
    );
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/1', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        abilities: [
          {
            ability: {
              name: 'overgrow',
              url: 'https://pokeapi.co/api/v2/ability/65/',
            },
            is_hidden: false,
            slot: 1,
          },
        ],
        height: 7,

        id: 1,

        name: 'bulbasaur',

        sprites: {
          versions: {
            'generation-v': {
              'black-white': {
                animated: {
                  front_default:
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
                },
              },
            },
          },
        },

        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
        ],
        weight: 69,
      }),
    );
  }),
];
