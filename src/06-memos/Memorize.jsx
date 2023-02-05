import React, { useState } from 'react'
import Small from './Small'
import useCounter from '../hooks/useCounter'

const Memorize = () => {

    const {counter, aumentar} = useCounter(0)
    const [show, setShow] = useState(true)

    const onCambiar = ()=>{
        setShow(!show)
    }

  return (
    <>
        <h1>Counter: <Small value={counter}/></h1>
        <hr />

        <button className='btn btn-primary' onClick={aumentar}>+1</button>
        {/* En este caso utilizamos JSON.stringify() porque al ser un valor booleano no se mostraria en pantalla */}
        <button className='btn btn-warning' onClick={onCambiar}>Show: {JSON.stringify(show)}</button>
    </>
  )
}

export default Memorize