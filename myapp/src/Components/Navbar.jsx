import React from 'react'
import {useState} from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import '../App.css'
import { MainContext,useContext } from '../context';

function Navbar() {
    const {setShow,items} = useContext(MainContext)
  return (
    <div className='header'>
        <h1 onClick={()=>setShow(true)}>Apple Store</h1>
        <RiShoppingCart2Line className="icon" onClick={()=>setShow(false)}/>
           <span className='basket'>{items.length}</span>
        
        </div>
  )
}

export default Navbar