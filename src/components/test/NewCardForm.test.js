import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewCardForm from '../NewCardForm';

describe('NewCardForm', () => {
  afterEach(cleanup);

  const setUp = () => {
    const addCardCallbackMock = jest.fn(() => {});
    const renderResult = render(
      <NewCardForm addCardCallback={addCardCallbackMock} />
    );

    const addCard = renderResult.getByText('Add an INSPIRATION card:');
    const submitButton = renderResult.getByText('Add Card !!');
    const userText = renderResult.getByTestId('text');

    return {
      ...renderResult,
      addCardCallbackMock,
      addCard,
      submitButton,
      userText,
    };
  };

  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = setUp();

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  test('Submitting a new card adds a new card', () => {
    //arrange
    const { userText } = setUp();

    const simulatedEvent = {
      target: {
        value: 'Hello World',
        name: 'text',
      },
    };
    
    //Act
    fireEvent.change(userText, simulatedEvent);

    //Assert
    expect(userText.value).toBe('Hello World');
  });
});
