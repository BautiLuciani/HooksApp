import React, { useState } from 'react'

const useForm = (initialValue = { }) => {

    const [form, setForm] = useState(initialValue)

    const onInputChange = ({target})=>{
        const {name, value} = target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onResetForm = ()=>{
        setForm(initialValue)
    }

  return {
    // con el ...form podemos desestructurar cualquier propiedad siempre que utilicemos el useForm
    // en el FormWithCustomHook lo vamos a entender mejor
    ...form,
    form,
    onInputChange,
    onResetForm
  }
}

export default useForm