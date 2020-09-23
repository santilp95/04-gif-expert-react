import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    // esto funciona para ejecutar cuando el compnente se rendiriza por primera vez si se manda el array vacio
    useEffect(() => {
        getGifs();
    },[])
        
    

    const  getGifs = async() =>{

        const url = `https://api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=qsUmBiU0pSR30iCqtxxSlrEeVjYfJAGP`;
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();

        const gifs = data.map(img =>{
            return {
                id: img.id,
                title : img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages( gifs);
    }


   
    

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
