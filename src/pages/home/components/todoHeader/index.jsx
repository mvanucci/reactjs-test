import React, { useState, useContext } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    root: {
        padding: '15px'
    },
    inputField: {
        margin: '10px',
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: '#d1ccc0'
    }
})

function TodoHeader({classes}) {

    const todoContext = useContext(TodoContext);
    const [todo, setTodo] = useState(() => "");

    const handleAddTodo = (e) => {
        e.preventDefault()
        todoContext.dispatch({ type: 'add', payload: todo });
        setTodo('')
    }

    return (
        <div>
            <p>Lista de Atividades</p>
            <div className={classes.root}>
                <input type="text" className={classes.inputField} onChange={(e) => { setTodo(e.target.value) }} placeholder="digite para filtrar" value={todo}></input>
                <button type="button" onClick={(e) => handleAddTodo(e)}>Adicionar</button>
            </div>
        </div>
    )
}

export default withStyles(styles)(TodoHeader);
