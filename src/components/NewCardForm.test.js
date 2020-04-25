import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import NewCardForm from './NewCardForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('NewCardForm', () => {
    test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

// describe('NewStudentForm', () => {
//   afterEach(cleanup); // Clear the DOM, to start with fresh empty HTML source code

//   const setup = () => {
//     const addStudentCallbackMock = jest.fn();
//     const renderResult = render(<NewStudentForm
//     addStudentCallback={addStudentCallbackMock}
//     />);

//     const fullNameInput = renderResult.getByLabelText(/Name:/i);
//     const emailInput = renderResult.getByLabelText(/Email:/i);
//     const submitButton = renderResult.getByText('Add Student');

//     return {
//       ...renderResult,
//       addStudentCallbackMock,
//       fullNameInput,
//       emailInput,
//       submitButton
//     };
//   }
//   test('that it matches the existing snapshot', () => {
//     // Arrange-Act
//     const { asFragment } = setup();

//     // Assert
//     expect(asFragment()).toMatchSnapshot();
//   });

//   test('Changing the fullName field changes the value', () => {
//     // Arrange
//     const { fullNameInput } = setup();

//     const simulatedEvent = {
//       target: {
//         value: 'Grace Hopper',
//       }
//     }

//     // Act
//     fireEvent.change(fullNameInput, simulatedEvent);

//     // Assert
//     expect(fullNameInput.value).toBe('Grace Hopper');
//   });

//   test('Changing the email field changes the value', () => {
//     // Arrange
//     const { emailInput } = setup();

//     const simulatedEvent = {
//       target: {
//         value: 'grace@navy.mil',
//       }
//     }

//     // Act
//     fireEvent.change(emailInput, simulatedEvent);

//     // Assert
//     expect(emailInput.value).toBe('grace@navy.mil');
//   });

//   test('Submitting the form calls the callback', () => {
//     // Arrange
//     const { emailInput, fullNameInput, getByTestId, addStudentCallbackMock } = setup();
//     const emailEvent = {
//       target: {
//         value: 'grace@navy.mil',
//       }
//     }
//     fireEvent.change(emailInput, emailEvent);

//     const fullNameEvent = {
//       target: {
//         value: 'Grace Hopper',
//       }
//     };
//     fireEvent.change(fullNameInput, fullNameEvent);

//     const form = getByTestId('new-student-form');
//     fireEvent.submit(form);

//     expect(addStudentCallbackMock).toHaveBeenCalled();
//     expect(addStudentCallbackMock).toHaveBeenCalledWith({
//       fullName: 'Grace Hopper',
//       email: 'grace@navy.mil',
//     });

//   })
// });
