import'@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetechGifs } from '../../hooks/useFetechGifs';

// con esto fingir cualquier llamada a este archivo y controlar la informacion
jest.mock('../../hooks/useFetechGifs')

describe('Pruebas componentes <GifGrid />', () => {
    const category = 'luna';
    

    test('debe de mostrar <GifGridItem/> correctamente', () => {
        useFetechGifs.mockReturnValue({
            data:[],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargar imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            title: 'cualquier cosa',
            url: 'https://localhost/cualquier.jpg'
        }]
        
        useFetechGifs.mockReturnValue({
            data:gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();

        
    });
    
    
});
