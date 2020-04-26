// src/components/test/Card.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
      onDeleteClick={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});