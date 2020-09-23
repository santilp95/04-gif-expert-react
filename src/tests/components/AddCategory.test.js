import React from 'react';
import'@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('Pruebas componentes <SddCatgerory />', () => {

    const setCategories = () =>{}

    test('debe mostrrar correctamente', () => {
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>)

        expect(wrapper).toMatchSnapshot();
    });
    
});
