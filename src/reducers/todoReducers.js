import { GET_TODOS, ADD_TODO, UPDATE_TODO_TEXT, DELETE_TODO } from '../constants';

export function todoReducers(state = { todos: [], todoText: '' }, action) {

    switch (action.type) {

        case GET_TODOS:
            return {
                todos: action.payload
            }
            break;

        case UPDATE_TODO_TEXT:
            return {
                todos: [...state.todos],
                text: action.payload
            }
            break;

        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload],
                text: ''
            }
            break;

        case DELETE_TODO:
            let currentTodos = [...state.todos];
            currentTodos = currentTodos.filter(function (currentTodo) {
                return currentTodo.text !== action.payload.text
            });
            return {
                todos: currentTodos
            }
            break;

        default:
            return state;
    }

    return state;
}

