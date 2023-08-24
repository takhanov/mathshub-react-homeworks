import React from "react";


function Button(props) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button className={`button ${props.className || ''}`} type={props.type || 'submit'}>{props.children}</button>
        )
}


export default Button
