const { renderHook } = require("@testing-library/react-hooks");
const { useFetechGifs } = require("../../hooks/useFetechGifs");

describe('pruebas en el hook useFetechGifs', () => {

    test('debe de retorinar el estado incinal', () => {
        //esto srive para simular un componente para la prueba de los hooks
        const {result} = renderHook(()=>useFetechGifs('Naruto'));
        const {data, loading} = result.current;

        //const {data:images, loading} = useFetechGifs('Naruto');

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });
    
});
