import { server } from 'src/mocks/server';
import Home from 'src/pages/Home/Home';
import { render, screen } from '@testing-library/react';
import { handlers } from 'src/mocks/handlers';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a Pokemon CardList component', () => {
  describe('When data is null', () => {
    test('Then it should render a message and image', () => {
      render(<Home />);

      expect(screen.getByAltText('pikachu triste')).toBeInTheDocument();
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
});
