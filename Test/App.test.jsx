
import { MemoryRouter } from 'react-router-dom'; // Para mockar rotas
import '@testing-library/jest-dom';
import App from '../src/App.jsx';
import '@testing-library/jest-dom'; // Apenas importa para habilitar os matchers
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'; // Ou do Jest diretamente, dependendo do ambiente

test("teste de componente App", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    
    expect(screen.getByText(/Filmes/i)).toBeInTheDocument();
});
