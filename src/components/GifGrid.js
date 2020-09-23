import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    // esto funciona para ejecutar cuando el compnente se rendiriza por primera vez si se manda el array vacio
    useEffect(() => {
        getGifs(category)
            .then(setImages);
    },[category])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                
                
                    {
                        images.map((img)=>
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        )
                    }
                
            </div>
        </>
    )
}
