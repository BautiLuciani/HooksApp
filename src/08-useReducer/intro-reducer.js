/*¿Que es un Reducer?
1. Es una funcion comun y corriente
2. Debe de ser una funcion pura
   a. No debe de tener efectos secundarios
   b. No debe de realizar tareas asincronas
   c. Debe de retornar siempre un estado nuevo
   d. No debe de llamar al localStorage o sessionStorage
   e. No debe de requerir mas que una accion que puede tener un argumento
3. Debe de retornar un nuevo estado
4. Usualmente solo recibe dos argumentos:
   a. el valor inicial (initialState) y la accion a ejecutar*/ 

// primero declaramos el valor inicial
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del poder',
    done: false
}]

// creamos el reducer, la cual es un simple funcion
const todoReducer = (state = initialState, action = {})=>{

    // agregamos el nuevo todo
    if(action.type === '[TODO] add New Todo'){
        return [...state, action.payload]
    }

    return state
}

// declaramos una variable con el todoReducer para que se guarde la funcion inicial
let todos = todoReducer()

// creamos un nuevo todo
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del tiempo',
    done: false
}

// creamos la accion para agregar nuevos todos
const addNewTodo = {
    // type va a ser el identificador (o nombre) de la accion
    type: '[TODO] add New Todo',
    // el payload es lo que va dentro de la accion
    // el payload no es obligatorio, pueden haber casos, como por ejemplo borrar un todo, el cual no requiere de un payload
    payload: newTodo,
}

// le pasamos el estado inicial que es el todos que declaramos anteriormente con la funcion inicial
// le pasamos la accion que es el addNewTodo
todos = todoReducer(todos, addNewTodo)

console.log({state: todos});