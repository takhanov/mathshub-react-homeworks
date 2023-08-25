import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button.jsx";
import './ModalError.css'


function ModalError({text, errorHandler}) {
    return (
        <>
            {ReactDOM.createPortal(
                <div className='overlay' onClick={errorHandler}/>,
                document.getElementById('overlay-root')
            )}
            {ReactDOM.createPortal(
                <div className='modal'>
                    <h2>Ошибка!</h2>
                    <p>{text}</p>
                    <Button onClick={errorHandler}>Закрыть</Button>
                </div>,
                document.getElementById('modal-root')
            )}
        </>
    )
}

export default ModalError