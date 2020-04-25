// src/components/test/Card.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewStudentForm from '../Card';

describe('Card', () => {

  afterEach(cleanup);

  test("That it matches the existing snapshot", () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        id={1}
        text={"I'm a new, inspiring note!"}
        emoji={"beer"}
        deleteCard={() => { }} 
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});

test("That the callback funtions work as expected", () => {
  // Arrange
  const formData = setup();

  //Act
  fireEvent.click(formData.deleteButton);

  //Assert 
  expect(formData.onDeleteButtonClick).toHaveBeenCalled();
});

^//I think line 32 and 35 need to be calling a different function, but I haven't cleared up which one yet. 