import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        id={1}
        text={'hello'}
        emoji={'smile'}
        deleteCardCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});

describe('User Interaction', () => {
  const setup = () => {
    const deleteCardCallbackMock = jest.fn(() => { });
    const renderResult = render(
    <Card 
      id={1}
      text={'hello'}
      emoji={'smile'}
      deleteCardCallback={deleteCardCallbackMock}
    />);
    const deleteButton = renderResult.getByText('Delete');

    return {
      ...renderResult,
      deleteCardCallbackMock,
      deleteButton,
    }
  };

  test('The callback function is called properly when the form is deleted', () => {
    // Arrange
    const formData = setup();

    // Act
    fireEvent.click(formData.deleteButton);

    // Assert
    expect(formData.deleteCardCallbackMock).toHaveBeenCalled();
  });
});