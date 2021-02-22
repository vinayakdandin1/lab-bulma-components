import React from 'react'

function CoolButton(props) {

    let classValue = 'button '

    if(props.className) {
        classValue += props.className
    }

    if(props.isSmall) {
        classValue += " is-small"
    }

    if(props.isPrimary) {
        classValue += " is-primary"
    }

    if(props.isDanger) {
        classValue += " is-danger"
    }

    if(props.isSuccess) {
        classValue += " is-success"
    }

    if(props.isLight) {
        classValue += " is-light"
    }

    if(props.isNormal) {
        classValue += " is-normal"
    }

    if(props.isOutlined) {
        classValue += " is-outlined"
    }

    if(props.isInfo) {
        classValue += " is-info"
    }

    return (
        <div>
            <button className={classValue} >{props.text}</button>
        </div>
    )
}

export default CoolButton