import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the react carousel demo header', () => {
  render(<App />);
  const headerElement = screen.getByText(/react carousel demo/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders the first image in the carousel', () => {
  render(<App />);
  const firstImageCaption = screen.getByText(/"Bespoke Manufacturing"/i);
  expect(firstImageCaption).toBeInTheDocument();
});

test('renders the second image in the carousel', () => {
  render(<App />);
  const secondImageCaption = screen.getByText(/"Down the Path"/i);
  expect(secondImageCaption).toBeInTheDocument();
});

test('renders the third image in the carousel', () => {
  render(<App />);
  const thirdImageCaption = screen.getByText(/"Clearing the Mind"/i);
  expect(thirdImageCaption).toBeInTheDocument();
});

test('renders all images with alt text', () => {
  render(<App />);
  const imageAltText = screen.getAllByAltText(/\D/);
  expect(imageAltText).toHaveLength(3);
});
