import {useState} from 'react'
import data from './data.json'
import '../App.css'
import { MainContext,useContext } from '../context'

function Card({setShow}) {
    const {add} = useContext(MainContext)
  return (
        
    <div className='card-containar'>   
        {
            data.map((e)=>
            <div className='card' key={e.id}>
                <img src={e.imageUrl} alt='img'/> 
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <h4>{e.price}$</h4>
                <button onClick={()=>add(e.name,e.description,e.price,e.imageUrl)}>Add</button>
                </div>
            )   
        }
    </div>
  )
}

export default Card