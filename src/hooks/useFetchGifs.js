import { useState } from 'react'
import { useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';


export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () =>{

        getGifs( category )
        .then(imgs => {

            setTimeout( () => {
                setState({
                    data: imgs,
                    loading: false
                });
            }, 500);
        })
    },[category])

    

    return  state;
}
