
import './App.css';
import { MainContext } from './context';
import { useState } from 'react';
//Components
import Card from './Components/Card';
import Basket from './Components/Basket';
import Navbar from './Components/Navbar';

function App() {
  const [show,setShow]=useState(false)
  const [items , setItems]=useState([])
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

  const data={
  setShow,
  show,
  add,
  setItems,
  items,
  }
  
  return (
    <MainContext.Provider value={data} className="App">
      <Navbar />
    {show ? <Card /> : <Basket /> }
    </MainContext.Provider>
  );
}

export default App;
