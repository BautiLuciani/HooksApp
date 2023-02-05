import React, { useEffect, useReducer } from 'react'
import todoReducer from '../08-useReducer/todoReducer';

// con el init hacemos que los valores almacenados en el localStorage se mantengan a pesar de que se actualice la pagina
const init = ()=>{
    return JSON.parse(localStorage.getItem('todo')) || [];
}

const useTodo = () => {

    const [todo, dispatch] = useReducer(todoReducer, valorInicial = [], init)

    // creamos la funcion para agregar un todo
    const handleNewTodo = (todo)=>{
        
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    // creamos la funcion para eliminar un todo
    const handleDeleteTodo = (id)=>{
        dispatch({
            type: 'Remove Todo',
            payload: id
        })
    }

    // creamos la funcion para tachar un todo en caso de estar completado (en caso de que se haya cumplido la tarea (done: true))
    const handleToggleTodo = (id)=>{
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    }


    // utilizamos el useEffect para que almacene un nuevo todo en el localStorage cada vez que haya un cambio en el state "todo"
    useEffect(() => {
      localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    const todoCount = ()=>{
        return todo.length
    }

    const todoPendings = ()=>{
        return todo.filter(todo=> !todo.done).length
    }

  return{
    todo,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todoCount,
    todoPendings
  }
}

export default useTodo