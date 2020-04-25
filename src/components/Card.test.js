// src/components/test/Card.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card';

describe('Card', () => {

  afterEach(cleanup);

  test("That it matches the existing snapshot", () => {

    const { asFragment } = render(
      <Card
        id={1}
        text={"I'm a new, inspiring note!"}
        emoji={"beer"}
        deleteCard={() => { }} 
      />
    );


    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});