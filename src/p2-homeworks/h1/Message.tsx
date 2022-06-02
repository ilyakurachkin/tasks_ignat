import React from 'react'
import s from "./Message.module.css"


type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img className={s.img} src={props.avatar} alt="#" width="150px" height="150px"/>
            </div>
            <div className={s.description}>
                <h1 className={s.title}>{props.name}<data>{props.time}</data></h1>
                <p className={s.text}>
                    {props.message}
                </p>
            </div>
        </div>
    )
}

export default Message
