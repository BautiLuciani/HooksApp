import React from 'react'

const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'Add Todo':
            // Siempre se dede retornar un estado
            return [...initialState, action.payload]
        
        case 'Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload)

        case 'Toggle Todo':
            return initialState.map(todo=>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })

        default:
            return initialState
    }
}

export default todoReducer