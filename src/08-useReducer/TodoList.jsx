import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todo, handleDeleteTodo, handleToggleTodo}) => {
    return (
        <ul className='list-group '>
            {
                todo.map((todo) => (
                    // TodoItem
                    <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}/>
                    // Fin de TodoItem
                ))
            }
        </ul>
    )
}

export default TodoList