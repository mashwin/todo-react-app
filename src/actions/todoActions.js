import { GET_TODOS, UPDATE_TODO_TEXT, ADD_TODO, DELETE_TODO } from '../constants';

export function getTodos() {
    return {
        'type': GET_TODOS,
        'payload':
        [
            {
                'text': 'Morning Wall',
                'completed': false
            },
            {
                'text': 'Get milk',
                'completed': false
            },
            {
                'text': 'Learn React',
                'completed': false
            }
        ]
    }
}

export function updateTodoText(text) {
    return {
        'type': UPDATE_TODO_TEXT,
        'payload': text
    }
}

export function addTodo(text) {
    return {
        'type': ADD_TODO,
        'payload':
        {
            'text': text,
            'completed': false
        }
    }
}

export function deleteTodo(text) {
    return {
        'type': DELETE_TODO,
        'payload': text
    }
}