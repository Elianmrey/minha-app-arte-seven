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
