import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {

  // it('renders without crashing', () => {
  //   console.log('testing would be nice! :)');
  // });

  test('Renders Board', () => {
    const { getByText } = render(<App />);
    const element = getByText(/Board/i);
    expect(element).toBeInTheDocument();
  });

});

