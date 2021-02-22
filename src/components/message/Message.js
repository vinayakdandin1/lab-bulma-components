import React from 'react'
import './Message.css'

function Message(props) {
    return(
        <div>
            <article className="message is-info">
                <div className="message-header">
                    <p>{props.title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {props.children}
                </div>
            </article>
        </div>
    )
}

export default Message