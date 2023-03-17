import {useState} from 'react'
import data from './data.json'
import Basket from './Basket'
import { Link } from 'react-router-dom';
import '../App.css'

function Card() {
    const basket =()=>{
        
    }
    const [items , setItems]=useState([
        {
            "id": 5,
            "name": "Apple Watch SE GPS (2022)",
            "description": "this is description of apple product",
            "imageUrl": "https://icentar.me/wp-content/uploads/2022/09/m2022-watchSE2.png",
            "price": 399
          }
])
    const add =(id, name, description, imageUrl, price)=>{
            setItems((items)=>(
                [
                    ...items,
                {
                    id:id,
                    name: name,
                    description:description,
                    imageUrl:imageUrl,
                    price:price,
                }
            ]))
    }
    console.log(items)
  return (
    <div>
        <div className='header'>
        <h1>Apple Store</h1>
        <a   href="#Basket"  className='basket-text'><h2>Basket</h2></a>
        <div className='basket'>{items.length}</div>
        </div>
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
    </div>
  )
}

export default Card