import React from 'react'
import useForm from '../hooks/useForm'

const FormWithCustomHook = () => {

    // en este caso creamos un nuevo useForm con tres propiedades
    // el ...form (explicado en useForm.js) nos permite poder extraer el propiedades aca mismo 
    const {form, onInputChange, onResetForm, username, password, email} = useForm({
        username: '',
        password: '',
        email: ''
    })

    // en caso de no tener el ...form lo pudimos haber desestructurado de la siguiente manera:
    // const {username, password, email} = form
    // cualquiera de las dos maneras esta bien

  return (
    <>
        <h1>Form With Custom Hook</h1>
        <hr />

        <input 
            type="text"
            className='form-control'
            placeholder='Usuario'
            name='username'
            onChange={onInputChange}
            value={username}
        />

        <input 
            type="password"
            className='form-control mt-2'
            placeholder='Contraseña'
            name='password'
            onChange={onInputChange}
            value={password}    
        />

        <input 
            type="email"
            className='form-control mt-2'
            placeholder='email' 
            name="email"
            onChange={onInputChange}
            value={email} 
        />

        <button className='btn btn-primary mt-2' onClick={onResetForm}> Borrar </button>
    </>
  )
}

export default FormWithCustomHook