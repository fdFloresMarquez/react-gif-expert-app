import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory()', () => {

    test('debe de cambiar el valor de la caja de testo', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Naruto' } })

        expect(input.value).toBe('Naruto')

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Naruto';

        render(<AddCategory onNewCategory={() => { }} />);

        const input= screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } })
        fireEvent.submit( form );

        expect(input.value).toBe('')

    });

});