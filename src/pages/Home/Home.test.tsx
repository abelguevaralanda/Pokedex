import { server } from 'src/mocks/server';
import Home from 'src/pages/Home/Home';
import { act, render, screen } from '@testing-library/react';
import { handlers } from 'src/mocks/handlers';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a Pokemon CardList component', () => {
  describe('When data is null', () => {
    test('Then it should render a message and image', () => {
      render(<Home />);

      expect(screen.getByAltText('loading')).toBeInTheDocument();
    });
  });

  describe('When component loads and API responds whit pokemons', () => {
    test('Then it should render the list of pokemon', async () => {
      server.use(...handlers);
      render(<Home />);

      expect(await screen.findByText('BULBASAUR')).toBeInTheDocument();
      expect(await screen.findByText('IVYSAUR')).toBeInTheDocument();
      expect(await screen.findByText('VENUSAUR')).toBeInTheDocument();
      expect(await screen.findByText('CHARMANDER')).toBeInTheDocument();
      expect(await screen.findByText('CHARMELEON')).toBeInTheDocument();
    });
  });

  describe('When the clics the previous button', () => {
    test('Then it should see the previous pokemon', async () => {
      render(<Home />);

      userEvent.click(screen.getByAltText('previous-page'));

      expect(await screen.findByText('1 / 64')).toBeInTheDocument();
      expect(await screen.findByText('BULBASAUR')).toBeInTheDocument();
    });
  });

  describe('When the user clicks the pagination button', () => {
    test('Then it should see others pokemons', async () => {
      server.use(
        rest.get('https://pokeapi.co/api/v2/pokemon', (_req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              count: 1281,
              next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
              previous: null,
              results: [
                {
                  name: 'charizard',
                  url: 'https://pokeapi.co/api/v2/pokemon/6/',
                },
                {
                  name: 'squirtle',
                  url: 'https://pokeapi.co/api/v2/pokemon/7/',
                },
                {
                  name: 'wartortle',
                  url: 'https://pokeapi.co/api/v2/pokemon/8/',
                },
                {
                  name: 'blastoise',
                  url: 'https://pokeapi.co/api/v2/pokemon/9/',
                },
                {
                  name: 'caterpie',
                  url: 'https://pokeapi.co/api/v2/pokemon/10/',
                },
              ],
            }),
          );
        }),
      );
      render(<Home />);

      await act(
        async () => await userEvent.click(screen.getByAltText('next-page')),
      );

      expect(await screen.findByAltText('previous-page')).toBeEnabled();

      expect(await screen.findByText('2 / 64')).toBeInTheDocument();
      expect(await screen.findByText('CHARIZARD')).toBeInTheDocument();
    });
  });
});
