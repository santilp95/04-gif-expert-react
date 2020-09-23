import React from 'react'

export const GifGrid = ({category}) => {

    const  getGifs = async() =>{

        const url = `https://api.giphy.com/v1/gifs/search?q=JOJO&limit=10&api_key=qsUmBiU0pSR30iCqtxxSlrEeVjYfJAGP`;
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();

        const gifs = data.map(img =>{
            return {
                id: img.id,
                title : img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs);
    }

    getGifs();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
