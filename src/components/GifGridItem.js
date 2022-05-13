import React from 'react'

export const GifGridItem = (props) => {
  return (
    <div className="card animate__animated animate__fadeIn">
       <p>{props.title}</p>
       <img 
       src={props.url}
       alt={props.title}
       />
       
    </div>
  )
}
