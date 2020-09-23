import'@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from "react";
import { GifGridItem } from '../components/GifGridItem';

describe('Pruebas <GifGridItem/>', () => {

    const title = 'un titulo'
    const url = 'https://localhost/algo.jpg'

    test('debe de mostrar <GifGridItem/> correctamente', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url}/>);
                                         
        expect(wrapper).toMatchSnapshot();
    });
    
});
