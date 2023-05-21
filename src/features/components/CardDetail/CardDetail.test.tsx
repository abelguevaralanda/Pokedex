import { server } from 'src/mocks/server';
import CardDetail from './CardDetail';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given pokemon card detail component', () => {
  describe('When the user clicks on pokemon card', () => {
    test('Then it should render pokemon detail', async () => {
      render(
        <MemoryRouter>
          <CardDetail pokemonId={'1'} />
        </MemoryRouter>,
      );

      expect(await screen.findByText('BULBASAUR')).toBeInTheDocument();
    });
  });
});
