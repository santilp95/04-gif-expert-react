import'@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
describe('Pruebas componentes <GifGrid />', () => {
    const category = 'luna';
    let wrapper = shallow(<GifGrid category={category}/>);

    test('debe de mostrar <GifGridItem/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
