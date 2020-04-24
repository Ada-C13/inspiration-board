import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from '../Card';
import Enzyme from 'enzyme';

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
