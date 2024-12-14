import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details  from '../src/pages/Details/Details.jsx';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom'; 

import { test, expect } from 'jest'



test('Renderiza o componente Details corretamente', () => {
    render(<Details cardType='movies' whereToGo='/' />);
    expect(screen.findAllByAltText('Sinopse')).toBeInTheDocument();
    expect(screen.findAllByAltText('Genero')).toBeInTheDocument();
});
