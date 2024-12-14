import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/pages/Home/Home.jsx';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom'; 

import {  expect } from 'jest'


describe('Renderiza o componente Home corretamente', () => {

   it('renders Home corretamente', () => {
    render(<Home />);
    expect(screen.getByText(/Filmes/i)).toBeInTheDocument();
    expect(screen.getByText(/Buscar/i)).toBeInTheDocument();
    expect(screen.getByText(/Alugar/i)).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeNull();
    expect(screen.queryByRole('button')).not.toBeNull();
  });
});
