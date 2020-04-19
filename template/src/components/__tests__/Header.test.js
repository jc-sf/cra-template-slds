import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Header';

test('show helper text when click Helper button', () => {
  const { queryByTestId, queryByTitle, getByTestId } = render(<Header userName="JC" />);
  expect(queryByTestId('help-heading')).toBeNull();

  const helperButton = queryByTitle(/help and training/i);
  expect(helperButton).toBeInTheDocument();
  fireEvent.click(helperButton);
  expect(getByTestId('help-heading')).toBeInTheDocument();
});
