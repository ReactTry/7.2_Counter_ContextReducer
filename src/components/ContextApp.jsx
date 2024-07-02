import React, { useContext } from 'react'
import {CounterContext} from '../contexts/CounterContext'
import { ButtonColorContext } from '../contexts/ButtonColorContext'

const ContextApp = () => {
  const {count,increment,decrement}=useContext(CounterContext)
   const {color} =useContext(ButtonColorContext);

  return (
    <><div>
        <div style={{textDecorationLine:'underline'}}> <b>Context  App</b></div>
        
        <h1>{count}</h1>

    </div>
    <button style={{background:color.minus}} onClick={decrement}>-</button>
    <button style={{background:color.plus}}  onClick={increment}>+</button>
    
    
    </>
  )
}

export default ContextApp