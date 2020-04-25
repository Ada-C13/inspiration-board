import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const shape = {text:"happy", emoji:"beer"} 

    const { asFragment } = render(
      <Card data={shape} deleteCard={()=>{}}/>
      
    );
    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});