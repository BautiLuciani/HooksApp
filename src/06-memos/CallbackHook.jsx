import React, { useCallback, useEffect, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {

    const [valor, setValor] = useState(0)

    // useCallback es muy parecido a useMemo, pero sirve para memorizar funciones
    // cada vez que una funcion se renderiza se guarda en un pedazo de memoria diferente
    // si queremos que una funcion no se renderice cada vez que cambia algun elemento en ella debemos utilizar el useCallback
    const aumentar = useCallback(
      (cantidad) => {
        // setValor(valor + 1)
        // el codigo de arriba no funciona ya que la funcion se renderiza solo una vez
        // al renderizarse solo una vez el valor del state (valor) va a cambiar por primera vez memorizando ese valor y despues se vuelve inmutable
        // es por eso que el codigo debe ser el siguiente:
        setValor((value) => value + cantidad)
      },
      [],
    )

      
  return (
    <>
        <h1>UseCallback Hook: {valor}</h1>
        <hr />

        <ShowIncrement aumentar={aumentar}/>
    </>

    
  )
}

export default CallbackHook