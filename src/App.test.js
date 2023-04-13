import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ajanvaraus as the screen title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ajanvaraus/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Valitse päivä on the screen', () => {
  render(<App />);
  const textElement = screen.getByText(/Valitse päivä/i);
  expect(textElement).toBeInTheDocument();
})

test('renders Page created by Sanna on the footer', () => {
  render(<App />);
  const textElement = screen.getByText(/Page created by Sanna/i);
  expect(textElement).toBeInTheDocument();
})
