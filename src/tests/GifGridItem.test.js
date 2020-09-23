import'@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from "react";
import { GifGridItem } from '../components/GifGridItem';

describe('Pruebas <GifGridItem/>', () => {

    const title = 'un titulo'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe de mostrar <GifGridItem/> correctamente', () => {
                                         
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagel igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.html());

        // devuelve un objeto con las propiedades del componente
        // console.log(img.props());
        //console.log(img.prop('src'));

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animate_fadeIn', () => {
        const classe = 'animate__fadeIn';
        const div = wrapper.find('div');
        
        

        expect(div.hasClass(classe)).toBe(true);
        
        //otra forma

        const className = div.prop('className');

        expect(className.includes(classe)).toBe(true);


    });
    


    
    
});
