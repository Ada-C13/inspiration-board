// src/components/test/NewCardForm.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {

  afterEach(cleanup);

  test("That it matches the existing snapshot", () => {

    const { asFragment } = render(
      <NewCardForm
        addCardCallback={() => { }} 
      />
    );


    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });


});