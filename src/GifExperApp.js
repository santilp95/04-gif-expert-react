import React, { useState } from 'react'

export const GifExperApp = () => {

    //const categories = ['One Punch','Naruto','JOJO'];
   const [categories, setCategories] = useState(['One Punch','Naruto','JOJO']);
   
   const handleAdd  =()=>{
       // forma de añadir algo con useStarw
       const add='HunterXHunter'
       setCategories([...categories,add]);     
   }


    return (
        <>
            <h2>GifExperApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map((catgory ) =>{
                    return <li key={catgory}>{catgory}</li>
                    })
                }
            </ol>
        </>
    );
}
