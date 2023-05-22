import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Given a Header component', () => {
  describe('When it is rendered', () => {
    test('Then it should a image', () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });
});
