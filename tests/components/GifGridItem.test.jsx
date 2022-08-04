import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";


describe('Pruebas en GifGridItem', () => {

    const title = "Naruto";
    const url = "https://naruto.com/";

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifGridItem title={title} url={url} isShown={true} />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifGridItem title={title} url={url} isShown={true} />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img')

        expect(alt).toBe(title);
        expect(src).toBe(url);
    });

    test('debe de mostrar el titulo en el componente', () => {

        render(<GifGridItem title={title} url={url} isShown={true} />);
        expect(screen.getByText(title)).toBeTruthy;

    });

})