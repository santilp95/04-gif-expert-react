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

    test('debe de llamar setCategories y limpiar la caja de texto', () => {
        // 1. simular el inputChange

        const input = wrapper.find('input');
        const value = 'Cao'
        input.simulate('change',{
            target: {
                value
            }
        });
        // 2. simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        // 3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        // 4. el valor del input debe estar  ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
});
