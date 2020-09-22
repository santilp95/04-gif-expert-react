import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = (e)=>{
        // con esto se caputra el valor
        const valor= e.target.value;
        setInputValue(valor);
    }
    // recibe el event y se lo mando a algo ene ste ejemplo a form
    const handleSubmit = (e)=>{
        // para prevenir el comportamiento por defecto del formulario(osea que actualice toda la pagina)
        e.preventDefault();

        console.log('Submit hecho')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
