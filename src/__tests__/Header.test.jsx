import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header', () => {
  it('should renders correctly', () => {
    render(<Header />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});