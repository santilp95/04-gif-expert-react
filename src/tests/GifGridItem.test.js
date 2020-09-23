import'@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from "react";
import { GifGridItem } from '../components/GifGridItem';

describe('Pruebas <GifGridItem/>', () => {
    test('debe de mostrar <GifGridItem/> correctamente', () => {
        const wrapper = shallow(<GifGridItem/>);
        expect(wrapper).toMatchSnapshot();
        
    });
    
});
