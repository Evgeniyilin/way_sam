import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogs}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Evgeniy'},
        {id: 2, name: 'Julia'},
        {id: 3, name: 'Aleksandra'},
        {id: 4, name: 'Michail'}
    ]
    let messages = [
        {id: 1, message:'Hello'},
        {id: 2, message: 'I working'},
        {id: 3, message: 'Welcome to the my World'}
    ]


    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map( m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;