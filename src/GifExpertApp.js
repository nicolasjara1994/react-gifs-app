import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Hunter X Hunter']);

  return ( 
    <div>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        <ol>
        { 
            /* categories.map( (category) => {
                return <li key={category}>{category}</li>
            }) */
            categories.map( category => {
              return <GifGrid
                category={ category }
                key={ category }
              />
            })

        }
        </ol>
    </div>
  )
}
