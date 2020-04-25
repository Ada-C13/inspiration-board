// src/components/test/NewCardForm.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from '../NewCardForm';

Snapshot test prototype/ pending Ross' approval 

describe('NewCardForm', () => {

  afterEach(cleanup);

  test("That it matches the existing snapshot", () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
        addCardCallback={() => { }} ////Update this section--I think we want the delete button here as well or perhaps instead of line 16; what are your thoughts on this, Ross?
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});