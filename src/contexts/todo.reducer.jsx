import repository from '../data/repository';

export default function reducer(state, action) {
    const data = repository();
    const addTodo = (todo) => {
        let todoItem = { id: Math.floor(Math.random() * 1000000) + 1, description: todo, done: false };
        let task = data.getItemParse('todos');

        if (task) {
            task.push(todoItem);
            data.setItemStringify('todos', task);
        } else {
            data.setItemStringify('todos', [todoItem]);
        }

        return [...state, todoItem];
    }

    const updateTodo = (id, done) => {
        let todoItem = state.find(todo => todo.id === id);

        if (typeof todoItem === 'undefined'){
            return [...state];
        }
        todoItem.done = done;
        data.setItemStringify('todos', [...state]);
        return [...state];
    };

    const deleteTodo = (id) => {
       let task = state.find(todo => todo.id === id);
        if (typeof task === 'undefined') {
           //return[...state];
        }
        state.splice(state.findIndex(t => t.id === id), 1);
        data.setItemStringify('todos', [...state]);
       return [...state];
    }

    switch (action.type) {

        case 'add':
            return addTodo(action.payload);
        case 'update':
            return updateTodo(action.payload.id, action.payload.done);
        case 'remove':
            return deleteTodo(action.payload.id);
        default:
            return null;
    }
}