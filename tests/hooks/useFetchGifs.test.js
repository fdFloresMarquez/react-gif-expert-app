import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchGifs('Luffy'));
        const { images, isLoading} = result.current;

        expect( isLoading ).toBeTruthy();
        expect( images.length ).toBe(0);

    });

    test('debe de rtornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs('Luffy'));
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        );
        
        const { images, isLoading} = result.current;
            
        expect( isLoading ).toBeFalsy();
        expect( images.length ).toBeGreaterThan(0);
        
    });
});