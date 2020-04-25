import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
} from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  afterEach(cleanup);

  const setUp = () => {
    const removeCardCallbackMock = jest.fn(() => {});
    const renderResult = render(
      <Card
        id={202}
        text={'hello world'}
        emoji={'beer'}
        removeCardCallback={removeCardCallbackMock}
      />
    );

    const removeCard = renderResult.getByText(
      'Take this card if you want/need it...'
    );

    return {
      ...renderResult,
      removeCardCallbackMock,
      removeCard,
    };
  };

  test('that it matches the existing snapshot', () => {
    //Act-Arrange
    const { asFragment } = setUp();

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  test('Removes a card when the function is called', () => {
    const { removeCardCallbackMock, removeCard } = setUp();

    fireEvent.click(removeCard);

    expect(removeCardCallbackMock).toHaveBeenCalled();
  });
});
