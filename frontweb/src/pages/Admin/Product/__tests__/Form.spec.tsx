import { render, screen } from "@testing-library/react";
import Form from "..";
import { Router, useParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn()
}));

test('Product form create tests', () => {

    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({
            productId: 'create'
        })
    })

    test('Should render Form', () => {
        render(
            <Form />
        )
        screen.debug();
    })
})