import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders token negotiator examples', () => {
  render(<App />, {wrapper: MemoryRouter});
  const element = screen.getByText(/Token Negotiator Examples/i);
  expect(element).toBeInTheDocument();
});
