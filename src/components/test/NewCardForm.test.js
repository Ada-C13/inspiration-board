import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from '../NewCardForm';

describe('NewCardForm', () => {
  test('that NewCardForm matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
      addCardCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});