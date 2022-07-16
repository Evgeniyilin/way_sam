import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/'+props.id;
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Evgeniy' id='1' />
                <DialogItem name='Julia' id='2' />
                <DialogItem name='Aleksandra' id='3' />
                <DialogItem name='Michail' id='4' />
            </div>
            <div className={s.messages}>
                <Message message='Hello' />
                <Message message='I working' />
                <Message message='Welcome to the my World' />
            </div>
        </div>
    )
}

export default Dialogs;