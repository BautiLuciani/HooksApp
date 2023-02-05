import React from 'react'

// Esta no es la manera de utilizar el memo, pero esta bueno para entenderlo
// Lo que hace memo es memorizar un componente y que solo se renderice cuando cambia una propiedad del mismo
// en vez de que se renderice cada vez que haya un cambio en el padre

// Se puede usar con React.memo(todo el componente) pero no hay que olvidar importar React de 'react'
// otra manera de usarlo es import {memo} from 'react' y no es necesario poner React.memo (solo con el memo alcanza)

// Sin embargo no es necesario usar memo salvo que el componente sea muy grande y tenga que cargar cosas pesadas

const Small = React.memo(({value}) => {

    console.log('Me volvi a dibujar');

  return (
    <small>{value}</small>
  )
})

export default Small