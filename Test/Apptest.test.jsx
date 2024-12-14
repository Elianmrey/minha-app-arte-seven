import { MemoryRouter } from 'react-router-dom'; 
import '@testing-library/jest-dom';
import App from '../src/App.jsx';
import '@testing-library/jest-dom'; 
import { render, screen } from '@testing-library/react';
import { test, expect } from 'jest'; 


test("teste de componente App", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    
    expect(screen.queryAllByTitle('Home')).toBeTruthy()
});


test("Testar se o componente App renderiza o componente Home como filho pela rota indicada", () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByTitle('Home')).toBeInTheDocument();
});