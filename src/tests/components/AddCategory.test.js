import React from 'react';
import'@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('Pruebas componentes <SddCatgerory />', () => {

    //evavulauar la funcion
    const setCategories = jest.fn()

    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe mostrrar correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo'
        input.simulate('change',{
            target: {
                value
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('NO debe de postear la informacion onSumbmit', () => {
        
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();

    });
    
});
