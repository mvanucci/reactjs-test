import React, { useContext, useState } from 'react';
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
    },
    taskItem: {
        cursor:'pointer'
    }
}));

export default function Todo({ id, description, done }) {

   const color = useStyles();
   const [showButtonOk, setShowButtonOk] = useState(true);
   const todoContext = useContext(TodoContext);

   const onDoneCheck = (e, id) => {
    e.preventDefault();
    setShowButtonOk(false);
    todoContext.dispatch({type: 'update', payload: {id: id, done: true} })
   }

   const onDeleteTask = (e, id) => {
       e.preventDefault();
       todoContext.dispatch({type: 'remove', payload: { id: id }});
   }

    return (
        <div className={color.taskItem}>
            <div>
                {id % 2 !== 0 ? <div className={color.colorStyle}>{id} - {description}</div> : <div>{id} - {description}</div>}
                {id % 2 !== 0 ?  <div className={color.colorStyle}>Feito? {done === true ? 
                <div className={color.taskDone}>Sim</div> : <div className={color.taskNotDone}>Não</div>}</div> : 
                <div>Feito? {done === true ? 
                <div className={color.taskDone}>Sim</div> : <div className={color.taskNotDone}>Não</div>}</div>}
            </div>
            <div >
                {showButtonOk && <button type="button" onClick={(e) => onDoneCheck(e, id)}>Ok</button>}
                <button type="button" onClick={(e) => onDeleteTask(e, id)}>Deletar</button>
            </div>
        </div>
    )
}