import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <App />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

    test('An App can be rendered', () => {
      const renderSampleApp = () => render(<App />);
      const { getByText } = renderSampleApp();
      const BoardElement = getByText(/Inspiration Board/i);
      expect(BoardElement).toBeInTheDocument;
  });
});

// describe('App', () => {
//   test('renders Inpiration Board', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/Inspiration Board/i);
//     expect(linkElement).toBeInTheDocument();
//     cleanup();
//   });
// });

//   it('renders without crashing', () => {
//     console.log('testing would be nice! :)');
//   });

// });

// describe('App', () => {
//   afterEach(cleanup);
//   const renderSampleApp = () => render(<App />);

// });


// src/components/test/NewStudentForm.test.js

