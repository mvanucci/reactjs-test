import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    colorStyle: {
        backgroundColor: '#dfe6e9'
    },
}));

export default function Todo({ id, description, done }) {

   const color = useStyles();

    return (
        <div >
            <div>
                {id % 2 !== 0 ? <div className={color.colorStyle}>{id} - {description}</div> : <div>{id} - {description}</div>}
                {id % 2 !== 0 ?  <div className={color.colorStyle}>Feito? {done === true ? 'Sim' : 'Não'}</div> :  <div>Feito? {done === true ? 'Sim' : 'Não'}</div>}
            </div>
            <div >
                <button type="button" >Ok</button>
            </div>
        </div>
    )
}