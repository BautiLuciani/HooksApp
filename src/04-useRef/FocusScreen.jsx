import React, { useRef } from 'react'

const FocusScreen = () => {

    const referencia = useRef()

    const onSelect = ()=>{
        // current hace referencia al valor que tiene almacenado "referencia"
        // select, como el nombre lo dice, sirve para selecionar algo
        referencia.current.select()
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input
            // con ref lo que hacemos es vincular la referencia con este input
            ref={referencia}
            type="text"
            className='form-control'
            placeholder='Ingrese su nombre'
        />

        <button className='btn btn-primary mt-3' onClick={onSelect}>Seleccionar nombre</button>
    </>

    
  )
}

export default FocusScreen