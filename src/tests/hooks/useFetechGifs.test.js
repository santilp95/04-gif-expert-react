const { renderHook } = require("@testing-library/react-hooks");
const { useFetechGifs } = require("../../hooks/useFetechGifs");

describe('pruebas en el hook useFetechGifs', () => {

    test('debe de retorinar el estado incinal', async() => {
        //esto srive para simular un componente para la prueba de los hooks
        const {result,waitForNextUpdate} = renderHook(()=>useFetechGifs('Naruto'));
        const {data, loading} = result.current;
        
        await waitForNextUpdate();
        //const {data:images, loading} = useFetechGifs('Naruto');

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        // wait_< funcion que regresa una promesa que indica cuando sucede el cambio de resultado en el customhook
        
        const {result,waitForNextUpdate} = renderHook(()=>useFetechGifs('Naruto'));
        await waitForNextUpdate();

        const {data, loading} = result.current;
        
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
    
    
});
