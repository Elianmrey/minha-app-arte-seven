import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthenticationScreen from '../src/pages/Authentication/Authentication.jsx';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom'; 

import {  expect } from 'jest'




describe('Renderiza o componente AuthenticationScreen corretamente', () => {
 
   it('renders AuthenticationScreen corretamente', () => {
    render(<AuthenticationScreen />);
    expect(screen.getByText(/Usuário/i)).toBeInTheDocument();
    expect(screen.getByText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
  });
});