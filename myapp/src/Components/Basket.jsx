import React from 'react'
import Card from './Card'

function Basket(Card , items) {
  return (
    <div className='card-containar'>  
    <h1>Basket</h1> 
        {
            items.map((e)=>
            <div className='card' key={e.id}>
                <img src={e.imageUrl} alt='img'/> 
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <h4>{e.price}$</h4>
                </div>
            )   
        }
    </div>
  )
}

export default Basket