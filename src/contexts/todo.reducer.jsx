export default function reducer(state, action) {

    const addTodo = (todo) => {
        let todoItem = { id: Math.floor(Math.random() * 1000000) + 1, description: todo, done: false };
        return [...state, todoItem];
    }

    const updateTodo = (id, done) => {
        console.log(id)
        let todoItem = state.find(todo => todo.id === id);
        if (todoItem === -1){
          return;  
        }
        todoItem.done = done;    
        return [...state];
    };

    const deleteTodo = (_todo) => {
        return state;
    }

    switch (action.type) {

        case 'add':
            return addTodo(action.payload);
        case 'update':
            return updateTodo(action.payload.id, action.payload.done);
        case 'remove':
            return deleteTodo(action.payload);
        default:
            return null;
    }
}