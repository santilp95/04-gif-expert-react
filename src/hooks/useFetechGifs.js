import { useState } from "react"


export const useFetechGifs = () => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    })

    setTimeout(()=>{
        setstate({
            data:[1,2,3,4],
            loading:false
        })
    },3000);

    return state; // es el objeto 
}
