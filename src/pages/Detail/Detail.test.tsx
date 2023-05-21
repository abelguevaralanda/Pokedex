import { render, screen } from '@testing-library/react';
import Detail from './Detail';
import { server } from 'src/mocks/server';
import { MemoryRouter, useParams } from 'react-router-dom';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));
describe('Given a Detail page', () => {
  describe('When this page is rendered', () => {
    test('Then should render a img', async () => {
      Object.defineProperty(document, 'visibilityState', {
        value: 'visible',
        writable: true,
      });
      const mockId = '1'; // proporciona un ID de Pokemon válido para la prueba
      (useParams as jest.Mock<any>).mockImplementation(() => ({
        id: mockId,
      }));
      render(
        <MemoryRouter>
          <Detail />
        </MemoryRouter>,
      );

      const image = await screen.findByTestId('pokemon-name');
      expect(image).toBeInTheDocument();
    });
  });
});
