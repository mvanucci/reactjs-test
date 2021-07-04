
export default function reducer(state, action) {

    const addTodo = (todo) => {
        let todoItem = { id: Math.floor(Math.random() * 1000000) + 1, description: todo, done: false };
        return [...state, todoItem];
    }

    const updateTodo = (id, done) => {
        let todoItem = state.find(todo => todo.id === id);
        if (typeof task === 'undefined'){
            return [...state];
        }
        todoItem.done = done;    
        return [...state];
    };

    const deleteTodo = (id) => {
       let task = state.find(todo => todo.id === id);
        if (typeof task === 'undefined') {
            return[...state];
        }
        state.splice(state.indexOf(id), 1)
        console.log(task);
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