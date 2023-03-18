import React, { useState } from 'react'
import { MainContext,useContext } from '../context';

function Basket() {
  const {items,setItems} = useContext(MainContext)

  const handleDelete = (itemId) => {
    const newItems = items.filter((item) => items.id !== itemId);
    setItems(newItems);
  };

 
let total = 0;

for (let i = 0; i < items.length; i++) {
  total += items[i].description;
}
console.log(total)

  console.log(items)
  return (
    <div>
    <div className='basket-containar'>  
         {
            items.map((e)=>
            <div className='card-basket' key={e.id}>
                <img className='img-basket' src={e.imageUrl} alt='img'/> 
                <div className='basket-info'>
                  <h3>{e.id}</h3>
                <p>{e.name}</p>
                <h4>{e.description}$</h4>
                <button  className='delete-button' onClick={() => handleDelete(items.id)}>Delete</button>
                </div>
                
                </div>
               
            
            )   
        }
       
        
    </div>
    <div className="total"><h1 className='h1-basket'>Total: {total}$</h1></div>  
    </div>
  )
}

export default Basket