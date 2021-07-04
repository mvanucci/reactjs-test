import React, { useContext } from 'react';
import {TodoContext } from '../../../../contexts/todo.context'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    colorStyle: {
        backgroundColor: '#dfe6e9'
    },
    taskDone: {
        color: '#218c74'
    },
    taskNotDone: {
        color: '#ff5252'
    }
}));

export default function Todo({ id, description, done }) {

   const color = useStyles();
   const todoContext = useContext(TodoContext);

   const onDoneCheck = (e, id) => {
    e.preventDefault();
    todoContext.dispatch({type: 'update', payload: {id: id, done: true} })
   }

    return (
        <div >
            <div>
                {id % 2 !== 0 ? <div className={color.colorStyle}>{id} - {description}</div> : <div>{id} - {description}</div>}
                {id % 2 !== 0 ?  <div className={color.colorStyle}>Feito? {done === true ? 
                <div className={color.taskDone}>Sim</div> : <div className={color.taskNotDone}>Não</div>}</div> : 
                <div>Feito? {done === true ? 
                <div className={color.taskDone}>Sim</div> : <div className={color.taskNotDone}>Não</div>}</div>}
            </div>
            <div >
                <button type="button" onClick={(e) => onDoneCheck(e, id)}>Ok</button>
            </div>
        </div>
    )
}