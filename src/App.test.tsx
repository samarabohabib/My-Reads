import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/store";
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { uiActions } from './store/slices/ui-slice';

test('renders learn react link', () => {
  render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);

  act(() => {
      store.dispatch(uiActions.setShowSpinner(false))
  });

  const linkElement = screen.getByText(/My Reads/i);
  expect(linkElement).toBeInTheDocument();
});
