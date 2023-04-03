import { Router } from 'react-router-dom';
import history from 'util/history';
import { render, screen, waitFor } from "@testing-library/react";
import Catalog from "..";

test('should render Catalog with products', async () => {



    render(
        <Router history={history}>
            <Catalog />
        </Router>
    )
    screen.debug();

    expect(screen.getByText('Catálogo de produtos')).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText('PC Gamer')).toBeInTheDocument();
    });

    screen.debug();

})