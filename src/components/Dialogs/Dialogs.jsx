import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessagesElements = React.createRef();
    let addMessagesElements = () => {
        let text = newMessagesElements.current.value;
        alert (text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessagesElements}></textarea>
                <button onClick={addMessagesElements}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;