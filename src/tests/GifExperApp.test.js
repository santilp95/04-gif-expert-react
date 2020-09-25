import'@testing-library/jest-dom';
import React from 'react';
const { shallow } = require("enzyme");
const { GifExperApp } = require("../GifExperApp");

describe('Pruebas en <GifExperApp/>', () => {

    test('debe funcionar correctamente', () => {
        const wrapper = shallow(<GifExperApp/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        const categories = ['Naruto','dragon ball'];
        const wrapper = shallow(<GifExperApp defalutCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    
    
});
