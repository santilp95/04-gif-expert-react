import React, { useState } from 'react'
import PropTypes from 'prop-types';

// llamar el componente atravez d destructurizacion
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        // con esto se caputra el valor
        const valor= e.target.value;
        setInputValue(valor);
    }
    // recibe el event y se lo mando a algo ene ste ejemplo a form
    const handleSubmit = (e)=>{
        // para prevenir el comportamiento por defecto del formulario(osea que actualice toda la pagina)
        e.preventDefault();
        
        if(inputValue.trim().length>2){
            // recibe las categorias del componente padre e isnerta con el inputValue la nuestra
            setCategories(categories=>[inputValue,...categories]);
            setInputValue('');
        }

        
       
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

// hacer obligatorio mandar la funcion
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
