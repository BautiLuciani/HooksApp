import React, { useMemo, useState } from 'react'
import useCounter from '../hooks/useCounter'


const ejCompPesado = (iteraciones)=>{
    for(let i=0; i<iteraciones; i++){
        console.log(`Num: ${iteraciones}`);
    }

    return `${iteraciones}`
}

const MemoHook = () => {
    const {counter, aumentar} = useCounter(0)
    const [show, setShow] = useState(true)

    const onCambiar = ()=>{
        setShow(!show)
    }

    // useMemo va a recordar el valor que retorna el elemento/objeto/funcion/etc que le pasemos en la funcion
    // se va a volver a ejecutar cada vez que haya un cambio en el valor que pongamos como dependencia
    const memorizar = useMemo(() => ejCompPesado(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        <h4>Numero de Iteraciones: {memorizar}</h4>
        <button className='btn btn-primary' onClick={aumentar}>+1</button>
        {/* En este caso utilizamos JSON.stringify() porque al ser un valor booleano no se mostraria en pantalla */}
        <button className='btn btn-warning' onClick={onCambiar}>Show: {JSON.stringify(show)}</button>
    </>
  )
}

export default MemoHook