import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Board from '../Board';


describe('Board', () => {
    afterEach(cleanup); //unmounts react trees that were mounted with render

    test('that it matches the existing snapshot', () => {

        const { asFragment } = render(
            <Board 

            url="https://inspiration-board.herokuapp.com/boards/"
            boardName= {`Quin-Quintero`}
            /> 
        );

        expect(asFragment()).toMatchSnapshot();
        cleanup();
    });

});