import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthenticationScreen from './AuthenticationScreen';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom'; 

import { test, expect } from 'vitest'



test('Renderiza o componente AuthenticationScreen corretamente', () => {
    render(<AuthenticationScreen />);
    
    
    expect(screen.getByPlaceholderText(/Nome de Usuário/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
});
