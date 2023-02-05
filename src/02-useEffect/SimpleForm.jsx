import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [form, setForm] = useState({
        username: 'Bautista',
        email: 'bautiluciani@hotmail.com'
    })

    const {username, email} = form;

    const onInputChange = ({target})=>{
        const {name, value} = target;
        setForm({
            ...form,
            // poniendo el name entre [ ] hacemos que el input se modifique en base al name que tiene
            // es por eso que no deben haber dos inputs con el mismo name
            [name]: value,
        })
    }

    // Es importante acordarnos a poner las dependencias en el useEffect, sino se va a ejecutar cada vez que haya un cambio en el componente
    // Todos los useEffect se van a ejecutar minimo una vez, cuando se monte la pagina por primera vez
    // El siguiente ejemplo se va a ejecutar una sola vez, cuando se monte la pagina al principio por primera vez
    useEffect(() => {
      // console.log('El componente se monto por primera vez');
    }, [])

    // El siguiente ejemplo se va a ejecutar cada vez que haya un cambio en el form
    useEffect(()=>{
        // console.log('Hubo un cambio en el form')
    }, [form])

    // El siguiente ejemplo se va a ejecutar cada vez que haya un cambio en el username
    useEffect(()=>{
        // console.log('Hubo un cambio en el username');
    }, [username])

    // El siguiente ejemplo se va a ejecutar cada vez que haya un cambio en el email
    useEffect(()=>{
        // console.log('Hubo un cambio en el email');
    }, [email])
    

  return (
    <>
        <h1>Formulario Simple</h1>

        <hr />

        <input 
            type="text"
            placeholder='Ingrese su username'
            className='form-control'
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            placeholder='Ingrese su email'
            className='form-control mt-2'
            name="email"
            value={email}
            onChange={onInputChange}
        />

        {(username == 'BautistaL' && <Message/>)}

    </>
  )
}

export default SimpleForm