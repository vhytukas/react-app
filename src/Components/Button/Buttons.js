import React, { useContext } from 'react'
import  {CountContext}  from '../../App';
import "./Btn.css"

const Buttons = () => {
const countContext = useContext(CountContext);
  return (
    <div className='buttons-component'>
        <button onClick={() => countContext.countDispatch("increment")}>+</button>
        <button onClick={() => countContext.countDispatch("decrement")}>-</button>
        <button onClick={() => countContext.countDispatch("reset")}>reset</button>
    </div>
  )
}

export default Buttons