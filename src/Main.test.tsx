import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders greeting', () => {
  render(<Main />);
  const salutation = screen.getByText(/This is Luis Azcuaga/i);
  expect(salutation).toBeInTheDocument();
});
