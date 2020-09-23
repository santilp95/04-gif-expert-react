import React from 'react'
import { useFetechGifs } from '../hooks/useFetechGifs'
// import { getGifs } from '../helpers/getGifts';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {loading} = useFetechGifs();
    /*const [images, setImages] = useState([])
    

    // esto funciona para ejecutar cuando el compnente se rendiriza por primera vez si se manda el array vacio, en caso de cambiar algo en este ejemplo la categoria
    useEffect(() => {
        getGifs(category)
            .then(setImages);
    },[category])*/

    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Cargando..' : 'Data cargada'}
            {/* <div className="card-grid">
                
                
                    {
                        images.map((img)=>
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        )
                    }
                
            </div> */}
        </>
    )
}
