import React from 'react';
import PropTypes from 'prop-types';
import { useFetechGifs } from '../hooks/useFetechGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data:images, loading} = useFetechGifs(category);
    

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando</p>}
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

GifGrid.propTypes ={
    category: PropTypes.string.isRequired
}