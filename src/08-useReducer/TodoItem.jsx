import React from 'react'

const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}>{todo.todo}</span>
            <div>
                <button
                    className='btn btn-success'
                    onClick={() => handleToggleTodo(todo.id)}
                >
                    Completado
                </button>
                <button
                    className='btn btn-danger'
                    onClick={() => handleDeleteTodo(todo.id)}
                >
                    Borrar
                </button>
            </div>
        </li>
    )
}

export default TodoItem