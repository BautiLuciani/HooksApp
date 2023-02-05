import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coord, setCoord] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        // Cada vez que el componente se monte se va a ejecutar el siguiente codigo:
        // console.log('Message Mounted')

        // Es importante crear una funcion para poder montarla y desmontarla
        // Si en vez de crear la funcion aparte la creamos en el addEventListener, cada vez que el useEffect se ejecute lo va a almacenar en un pedazo de memoria diferente, lo cual se vuelve imposible desmontarlo y no para de ejecutarse
        // Es por eso que al hacerlo en una funcion el pedazo de memoria es el mismo, pudiendo montarlo y desmontarlo mas facilmente
        const onMouseMove = ({x,y})=>{
            setCoord({
                x,
                y
            })
        }

        window.addEventListener('mousemove', onMouseMove)
    
      return () => {
        // Cada vez que el componente se desmonte se va a ejecutar el siguiente codigo:
        // console.log('Message Unmounted')

        // Con la funcion podemos desmontarlo sin problema
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    

  return (
    <>
        <h4>Este Usuario ya existe</h4>
        {/*Recordemos que para mostrar un objeto primero hay que hacerle el JSON.stringigy() */}
        {JSON.stringify(coord)}
    </>
    
  )
}

export default Message