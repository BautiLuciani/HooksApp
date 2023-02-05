import React from 'react'
import useTodo from '../hooks/useTodo';
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

const TodoApp = () => {

    const { todo, todoCount, todoPendings, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

  return (
    <>
        <h1>Todo App: {todoCount}</h1>
        <small>Pendientes: {todoPendings}</small>
        <hr />

        <div className='row'>
            <div className='col-7'>
                {/* TodoList */}
                    <TodoList todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}/>
                {/* Fin de TodoList */}
            </div>
            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr />
                
                {/* TodoAdd */}
                    <TodoAdd onNewTodo={handleNewTodo}/>
                {/* Fin de TodoAdd */}
            </div>
        </div>
    </>
  )
}

export default TodoApp