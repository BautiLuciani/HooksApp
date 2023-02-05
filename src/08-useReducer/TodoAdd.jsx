import React from 'react'
import useForm from '../hooks/useForm'

const TodoAdd = ({onNewTodo}) => {

    // utilizamos el useForm (Custom Hook) para el control de los formularios
    const {todo, onInputChange, onResetForm} = useForm({
        // Inicializamos el valor inicial
        todo: ''
    })

    // controlamos el envio del formulario
    const onFormSubmit = (e)=>{
        e.preventDefault()
        if(todo.length <= 1) return;

        // creamos un nuevo todo
        const newTodo = {
            id: new Date().getTime(),
            todo,
            // todo: todo
            done: false
        }

        // mandamos por props el nuevo todo utilizando la funcion que traemos desde TodoApp
        onNewTodo(newTodo)
        // reseteamos el formulario para que vuelva a estar en blanco cuando se envia
        onResetForm()
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder='¿Que desea agregar?'
                className='form-control'
                name='todo'
                value={todo}
                onChange={onInputChange}
            />

            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )
}

export default TodoAdd