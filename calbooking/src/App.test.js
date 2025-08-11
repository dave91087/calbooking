import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('renders Home heading', () => {
  const { unmount } = render(<App />);
  expect(
    screen.getByRole('heading', { name: /home/i })
  ).toBeInTheDocument();
  unmount();
});
