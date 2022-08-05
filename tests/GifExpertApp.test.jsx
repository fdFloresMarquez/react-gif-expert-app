import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp, onRemoveGrid } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => { 
    
    test('debe de hacer match con el snapshot ', () => {

        const { container } = render( <GifExpertApp />)   
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el titulo en el componente', () => {

        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp')).toBeTruthy;

    });

    test('debe de renderizar la nueva categoria', () => {
        const inputValue = 'Naruto';

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } })
        fireEvent.submit( form );

        expect(screen.getByText('Naruto')).toBeTruthy;
    });



 })