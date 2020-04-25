import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  afterEach(cleanup);
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
  });
});

describe('user interaction with removing a card', () => {
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
});
