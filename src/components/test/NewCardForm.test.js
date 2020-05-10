import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewCardForm from '../NewCardForm';

describe('NewCardForm', () => {
  afterEach(cleanup);
  
  test('that it matches the existing snapshot', () => {
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


  describe('User Interaction', () => {
    // render the form and get the inputs & button
    const setup = () => {
      const addCardCallbackMock = jest.fn(() => { });
      const renderResult = render(<NewCardForm addCardCallback={addCardCallbackMock}/>);
      const textInput = renderResult.getByTestId('new-card-form--text');
      const emojiInput = renderResult.getByTestId('new-card-form--emoji'); 
      const addButton = renderResult.getByText('Add Card');
      const form = renderResult.getByTestId('new-card-form--form');

      return {
        ...renderResult,
        addCardCallbackMock,
        textInput,
        emojiInput,
        addButton,
        // form
      }
    };

    test('Typing on the text field changes the input', () => {
      // Arrange 
      const formData = setup();
      const simulatedEvent = {
        target: {
          value: 'howdy world',
        },
      };

      // Act 
      // put 'howdy world' in the input field 
      fireEvent.change(formData.textInput, simulatedEvent);

      // Assert 
      expect(formData.textInput.value).toBe('howdy world');
    });

    test('Selecting on the emoji field changes the input', () => {
      // Arrange 
      const formData = setup();
      const simulatedEvent = {
        target: {
          value: "heart_eyes",
        },
      };

      // Act 
      // put 'heart_eyes' in the input field
      fireEvent.change(formData.emojiInput, simulatedEvent);

      // Assert 
      expect(formData.emojiInput.value).toBe('heart_eyes');
    });


    test('The callback function is called correctly when the form is submitted', () => {
      // arrange
      const formData = setup();

      // Act 
      fireEvent.change(formData.textInput, { target: { value: 'howdy world', }, })
      fireEvent.change(formData.emojiInput, { target: { value: 'heart_eyes', }, })
      fireEvent.click(formData.addButton);

      expect(formData.addCardCallbackMock).toHaveBeenCalled();
      expect(formData.textInput.value).toBe('');
      expect(formData.emojiInput.value).toBe('');
    });
  });
});