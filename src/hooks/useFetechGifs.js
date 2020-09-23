import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifts';

export const useFetechGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    })
    
    // esto funciona para ejecutar cuando el compnente se rendiriza por primera vez si se manda el array vacio, en caso de cambiar algo en este ejemplo la categoria
    useEffect(() => {
        // peticion http getGitst con el then mandamos lo de la peticion
        getGifs(category)
            .then(imgs =>{

                setTimeout(()=>{


                    setstate({
                        data: imgs,
                        loading: false
                    });

                },3000);               
            })
        
    },[category])

  

    return state; // es el objeto 
}
