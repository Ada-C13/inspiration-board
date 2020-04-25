import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    //Arrange-Act
    const { asFragment } = render(
      <Card
        id={202}
        text={'hello word'}
        emoji={'beer'}
        removeCardCallback={() => {}}
      />
    );
    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});

describe('user interaction with removing a card', () => {
  const setup = () => {
    const removeCardCallbackMock = jest.fn(() => { });
    const renderResult = render(
    <Card 
      id={202}
      text={'hello world'}
      emoji={'beer'}
      removeCardCallback={removeCardCallbackMock}
    />);
    const removeCard = renderResult.getByText('remove THIS card');

    return {
      ...renderResult,
      removeCardCallbackMock,
      removeCard,
    }
  };
});