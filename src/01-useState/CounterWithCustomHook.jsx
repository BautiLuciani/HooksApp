import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterWithCustomHook = () => {

    const {counter, aumentar, aumentarDe2, resetear, restar, restarDe2} = useCounter(0)

  return (
    <>
        <h1>CounterWithCustomHook: {counter}</h1>

        <hr />

        
        <button className='btn btn-primary' onClick={()=>restarDe2(2)}> -2 </button>
        <button className='btn btn-danger' onClick={restar}> -1 </button>
        <button className='btn btn-primary' onClick={resetear}> Reset </button>
        {/*Recordemos que si los parametros son iguales podemos mandarlo como el ejemplo del onClick de abajo*/}
        {/*Es decir que seria igual a ()=>aumentar() */}
        <button className='btn btn-danger' onClick={aumentar}> +1 </button>
        {/*Recordemos que si el parametro es diferente debemos mandarlo como el ejemplo del onClick de abajo*/}
        <button className='btn btn-primary' onClick={()=> aumentarDe2(2)}> +2 </button>
    </>
  )
}

export default CounterWithCustomHook